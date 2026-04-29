---
title: "Fracture Immobilisation Trainer"
subtitle: "A high-fidelity cast-application simulator integrating a 3D-printed anatomical core, pulsatile flow, haptic feedback, embedded sensing, and real-time UI — built for under £500 vs a £2,000 commercial alternative."
featured: true
order: 1
timeline: "2025–2026 (Final Year Project)"
role: "Anatomical Core Lead — skeletal design, soft-tissue system, mould manufacture, material selection"
tags: ["Haptics", "ESP32", "Fluidics", "Sensors", "3D Printing", "Blender", "Silicone Casting", "Rapid Prototyping"]
heroImage: "/images/project1.jpg"
links:
  report: "/assets/EMS690U_Integrated_Design_Project.pdf"
  report2: "/assets/EMS690U_Detailed_Design_Report_Hishaam_Abbasi_Complete-1.pdf"
  report2Label: "Download Individual Report"
  video: "https://youtu.be/kSiA5kM77s0"
---

## The Problem

Distal radius fractures account for approximately 17.5% of all fractures presenting to UK emergency departments, making correct cast application a foundational clinical skill. Training on real patients is increasingly constrained by ethical concerns and patient apprehension — yet the consequences of poor technique are serious: thermal burns from exothermic plaster reactions, pressure sores from inadequate padding, and compartment syndrome from excessive cast tightness.

Existing commercial trainers such as the Limbs & Things Colles' Fracture Trainer (~£2,000) are **passive** — they provide a realistic substrate but deliver no objective feedback. Assessment depends entirely on an observing instructor. This project closes that loop.

---

## Project Proposal Video

<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px;margin:1.5rem 0;">
  <iframe
    src="https://www.youtube.com/embed/kSiA5kM77s0"
    title="Interactive Fracture Immobilisation Trainer — Project Proposal"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
  ></iframe>
</div>

---

## System Architecture

The trainer is divided into five integrated workstreams, each developed in parallel with shared interface specifications:

| Workstream | Function |
|---|---|
| **Anatomical Core** *(my workstream)* | 1:1 scale forearm chassis — skeleton, joints, soft tissue |
| **Flow Pumping System** | Programmable pulsatile flow replicating vascular physiology |
| **Haptic Feedback** | Piezoelectric actuators embedded in soft tissue |
| **Sensing** | Hall-effect sensors for fracture alignment; pressure distribution |
| **User Interface** | ESP32-driven real-time display for trainee feedback and scoring |

---

## My Workstream: Anatomical Core

My role was to design and manufacture the physical integration chassis — the anatomical forearm model that every other subsystem mounts into. The core spans humerus to fingertips at a 1:1 adult scale (255 mm forearm, 50th-percentile NASA anthropometric data), and must simultaneously be anatomically faithful, mechanically durable, and modular enough to host sensing, fluidics, and haptics.

### Skeletal Structure

The skeleton was sculpted in **Blender 4.5** from photographic reference, then sliced in Orca for FDM printing. Internal routing channels run through the bones for flow tubing, sensor wiring, and actuator connections — so no external cabling compromises the model's realism.

A clean transverse break in the distal radius simulates the Colles' fracture site. Fragment alignment is tracked in real time via **Hall-effect magnetometers** embedded at the fracture, giving trainees an objective measure of how well the cast is stabilising the break.

### Material Selection — Cantilever Study

Cast application loads are cyclic and long-duration, so the relevant properties are **elastic stability** across many cycles, not ultimate strength. I ran a cantilever deflection study comparing four FDM filaments under progressive loading:

| Material | Stiffness (MPa) | Elastic Stability | Whitening at 396g |
|---|---|---|---|
| **PETG-CF** | ~2,350 | ✅ Flat — no drift | None |
| PLA | ~2,700 → 2,300 | ❌ ~15% drift | Visible |
| ASA-CF | ~2,400 | Partial | Mild |
| ABS | ~1,950 | ❌ Drift | Strongest |

**PETG-CF** was the only material whose apparent Young's modulus stayed flat across the loading range — the only candidate showing no plastic yielding at realistic trainer loads. This is the production specification for all load-bearing skeletal elements. The prototype uses PLA/ASA-CF as a filament-constrained fallback to be replaced before live training deployment.

### Soft Tissue System

The dual-durometer silicone system is the key differentiator from single-material competitors:

- **Muscle layer:** Dragon Skin 30A — stiffer elastic matrix replicating the resistance of bony landmarks felt through palpation
- **Skin layer:** Ecoflex 00-30 — high elongation at break (900%), low viscosity for detailed mould reproduction, replicates the compliance of real skin

This is motivated by tissue mechanics data from the literature: the indentation response of the forearm is 9–16× more sensitive to skin mechanics than to deeper tissue, so realistic skin compliance dominates the tactile impression during palpation. A single bulk silicone cannot replicate this.

In informal handling tests, users consistently identified the dual-layer model as more realistic than uniform samples when palpating for bony landmarks — qualitatively consistent with the literature on multi-layer tissue simulation.

### Mould Design and Manufacture

Multi-part moulds were designed in **Blender** around the finalised bone geometry, then printed in PLA and filler-primed. Silicone was cast last in the workflow, allowing the skeleton and internal routing to be fully verified before committing to the soft tissue layers. The modular mould design means individual skin panels can be replaced independently without rebuilding the skeleton — roughly trebling the usable life of the artefact per unit of silicone.

---

## Outcomes

- ✅ **Cost target met** — estimated material cost below £500 vs £2,000 commercial comparator
- ✅ **Modularity met** — no interface change required throughout the project as subsystems evolved
- ✅ **Tactile fidelity demonstrated qualitatively** — layered model consistently preferred over uniform samples in informal palpation tests
- ⚠️ **Durability partially met** — PETG-CF selected but prototype uses PLA; full cyclic validation pending
- ⚠️ **Formal clinical validation not yet performed** — prototype level; quantitative palpation comparison against cadaveric forearm is future work

---

## What I Learned

Working across a five-person team with tightly coupled physical interfaces forced very early and very precise agreement on dimensions, tolerances, and channel geometry. The lesson was that **modular architecture is only as good as the interface specifications defined before any part is printed** — vague interfaces cause expensive reprints.

The cantilever study also taught me to be more careful about the validity limits of analytical models: δ/L reached 25–36% in my tests, well beyond the ~10% limit of small-deflection beam theory, so absolute E values are systematically underestimated. The ranking between materials still holds because all specimens were loaded into the same regime — but it was a useful reminder that approximate rigs give approximate answers.


