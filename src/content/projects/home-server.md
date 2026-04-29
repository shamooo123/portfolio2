---
title: "Home Server and Self-Hosted Infrastructure"
subtitle: "A production home server built on a repurposed workstation running Proxmox VE, Docker, and a full suite of self-hosted services — including Jellyfin with NVENC hardware transcoding, Nextcloud family cloud, automated backups to AWS Glacier, and four live websites behind Cloudflare Tunnel."
featured: true
order: 2
timeline: "2025–Present (Ongoing)"
role: "Full stack infrastructure — hardware, hypervisor, networking, services, security"
tags: ["Linux", "Docker", "Proxmox", "Cloudflare", "Networking", "AWS", "Self-Hosting", "Nvidia"]
heroImage: "/images/homelab-hero.jpg"
---

## The Goal

The brief was simple: take a decommissioned workstation and turn it into a fully capable home server running family services, self-hosted websites, and automated cloud backups — with zero open ports and everything accessible remotely via a proper domain. No compromises on reliability since real family data lives here.

The result is a production system that has been running continuously since build, serving four family members across Nextcloud, Jellyfin, and four live websites.

---

## Hardware

The base is a **Lenovo ThinkStation P320 Tower** — a workstation-class machine picked up cheaply and substantially upgraded:

| Component | Spec |
|---|---|
| CPU | Intel Xeon E3-1230v5 @ 3.40GHz (4c/8t) |
| RAM | 16GB DDR4 2133MHz (4× 4GB) |
| Boot drive | 500GB Samsung SSD |
| Media drive | 500GB Seagate HDD (Jellyfin) |
| Storage drive | 8TB HDD (Nextcloud, websites) |
| GPU | MSI RTX 3050 6GB LP (NVENC transcoding) |
| Network | Intel I226-V 2.5GbE + Intel I219-LM onboard |

The RTX 3050 was added specifically for hardware video transcoding — offloading Jellyfin's encode/decode workload from the CPU entirely. Getting this working inside an LXC container was the most technically involved part of the build.

---

## Hypervisor — Proxmox VE

Proxmox VE 9 runs as the bare metal hypervisor on a Debian Trixie base. The kernel is pinned to **6.14.11-6-pve** — kernel 6.17 shipped with a breaking change for the Nvidia 550 driver series that caused the GPU to be unavailable to containers.

All services run in a single **Ubuntu 24.04 LXC container** (unprivileged with specific capability overrides) rather than a VM. LXC containers share the host kernel and have near-native performance with much lower overhead than full virtualisation — important for a machine also handling GPU passthrough and storage I/O simultaneously.

---

## GPU Passthrough to LXC

Getting the RTX 3050 accessible inside a Docker container running inside an LXC container required solving several layered problems:

**Nvidia device passthrough** — The `/dev/nvidia*` device nodes are created on the host and passed through to the LXC container via cgroup device allowlist entries. The UVM device major number changes between boots, so both 235 and 236 are allowed:

```
lxc.cgroup2.devices.allow: c 195:* rwm   # nvidia0, nvidiactl
lxc.cgroup2.devices.allow: c 235:* rwm   # nvidia-uvm (boot variant 1)
lxc.cgroup2.devices.allow: c 236:* rwm   # nvidia-uvm (boot variant 2)
lxc.cgroup2.devices.allow: c 240:* rwm   # nvidia-caps
```

**Library version mismatch** — Ubuntu's packaged Nvidia 550 shims pull in 580-series libraries, which don't match the 550 driver on the Proxmox host. The fix was to bind-mount the host's actual Nvidia libraries directly into the container rather than installing anything from apt:

```
lxc.mount.entry: /usr/lib/x86_64-linux-gnu/nvidia/current usr/lib/x86_64-linux-gnu/nvidia/current none bind,optional,ro,create=dir
```

**UVM device auto-creation** — A systemd service on the Proxmox host runs `nvidia-modprobe -u -c=0` before containers start, ensuring the UVM devices exist before any container tries to access them.

**AppArmor conflicts** — Docker inside LXC requires AppArmor to be unconfined at the LXC level. The Docker daemon is configured with `default-runtime: nvidia` so all containers inherit GPU access without needing runtime flags per-container.

The end result: Jellyfin hardware transcoding confirmed working at 60W GPU load, 33% utilisation during 4K stream — the CPU is essentially idle during playback.

---

## Docker Services

All services run via Docker Compose, managed through Portainer, and exposed via Cloudflare Tunnel — no ports open on the router.

### Jellyfin
4K media server with full NVENC hardware transcoding and HDR tone mapping. Supports H.264, HEVC, VP9, AV1 decode with NVENC encode. Transcode cache mounted on the HDD to prevent the container disk filling up. Accessible at `jellyfin.abbasihome.com`.

### Nextcloud + MariaDB
Family cloud storage for four users on the 8TB drive. Mobile apps configured on Android (auto photo upload working) and iOS (CardDAV contacts, CalDAV calendar sync via `remote.php/dav`). 1.3TB of Google Drive data migrated server-side using rclone — transferred directly from Google's servers to the NAS without touching the home internet connection. Accessible at `cloud.abbasihome.com`.

### Nginx Proxy Manager
Handles SSL termination and reverse proxy routing for all internal services. Manages certificates automatically via Let's Encrypt through the Cloudflare DNS challenge. Accessible at `npm.abbasihome.com`.

### Portainer
Docker management UI for stack deployment, container monitoring, and log viewing. All services deployed as Compose stacks rather than individual containers for clean management. Accessible at `portainer.abbasihome.com`.

### Duplicati
Automated nightly encrypted backups to **AWS S3 Glacier Deep Archive** (~£0.001/GB/month). Sources: Nextcloud data, website files, Jellyfin config. AES-256 encryption with smart retention policy (daily for a week, weekly for a month, monthly forever). Configured via a dedicated IAM user with minimum required S3 permissions. Accessible at `backup.abbasihome.com`.

### Cloudflare Tunnel (cloudflared)
The tunnel daemon runs as a Docker container and maintains an outbound-only connection to Cloudflare's edge. All public traffic arrives via this tunnel — the router has zero open ports. This is significantly more secure than port forwarding and means the server is accessible even if the ISP changes the external IP.

---

## Networking and Security

**Cloudflare Tunnel** routes all traffic for five domains: `abbasihome.com`, `hishaamabbasi.co.uk`, `madebylayers.co.uk`, `sarashan.com`, `abbasiholiday.co.uk`. All domains were migrated from GoDaddy nameservers to Cloudflare for full DNS management.

**Cloudflare Zero Trust Access** protects sensitive services. The 3D printer web interface (`qidi.abbasihome.com`) sits behind an email OTP policy — anyone without an approved email address gets challenged before reaching the printer controls. This was added after exposing the printer interface publicly and realising it had no authentication of its own.

**2.5GbE internal network** — a 2.5Gbps switch connects the server and workstations, giving plenty of headroom for simultaneous 4K streams, large Nextcloud transfers, and backup jobs without contention.

---

## Self-Hosted Websites

Four websites run as individual Nginx Docker containers, each mapped to a separate port and routed via Nginx Proxy Manager:

| Site | Stack | Notes |
|---|---|---|
| `hishaamabbasi.co.uk` | Astro + Tailwind | This portfolio — built and served from the server |
| `madebylayers.co.uk` | HTML/CSS/JS | E-commerce site |
| `sarashan.com` | HTML/CSS/JS | Wedding gallery |
| `abbasiholiday.co.uk` | HTML/JS + live JSON | Family travel timeline |

All four were previously hosted on Vercel. Migrating to self-hosted reduced external dependencies and gave full control over serving, caching, and build pipelines.

---

## Storage Architecture

```
500GB SSD   → Proxmox OS + LXC container root (40GB allocated)
500GB HDD   → Jellyfin media library + config + transcode cache
8TB HDD     → Nextcloud data (all users) + website files + future expansion
```

The transcode cache being on the HDD was an important lesson — running Jellyfin without this caused the 40GB container disk to fill completely during a 4K streaming session, taking down all services until the disk was resized and the cache redirected.

---

## Key Challenges Solved

**Kernel pinning** — Proxmox's rolling kernel updates broke the Nvidia driver twice. The solution was pinning the boot kernel to 6.14 via `proxmox-boot-tool` and preventing automatic updates from changing the grub default.

**AppArmor + Docker + LXC** — The three-way interaction between AppArmor policies, Docker's security model, and LXC container isolation required careful configuration. The working solution avoids `default-security-opt` in daemon.json (which turned out to be an invalid directive in this Docker version) and instead handles AppArmor at the LXC level only.

**Nextcloud timeouts** — Large file uploads through the Cloudflare Tunnel were timing out due to PHP's default execution limits. Resolved by tuning `max_execution_time`, `upload_max_filesize`, and `post_max_size` in the Nextcloud PHP config.

**Drive failure recovery** — During the 8TB HDD installation, the SSD power connector was accidentally dislodged. The machine booted into kernel 6.17 (the unpinned default), which broke the Nvidia driver. Recovery required: reseating the SSD, re-pinning the kernel, recreating the UVM devices, and restarting the container stack — all diagnosed remotely via the Proxmox web UI.

---

## What I Learned

Running production services for real users (family members who notice when things break) is a very different discipline from hobby tinkering. A few things that became obvious quickly:

**Backups matter before you need them.** The Duplicati setup was configured before any significant data was stored — not after. The instinct to set up backups first came from thinking about what a drive failure would actually mean for four people's photos and documents.

**Observability before features.** Adding Portainer and structured logging before adding more services made debugging significantly faster. The Cloudflare Tunnel health dashboard also provides early warning of connectivity issues before users notice.

**The gap between "working" and "reliable" is mostly edge cases.** The GPU passthrough worked immediately in testing but failed on reboot because UVM devices weren't being recreated. Fixing for the steady state requires thinking through every boot path, not just the happy path.
