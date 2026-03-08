---
title: "Fracture Immobilisation Trainer"
subtitle: "High-fidelity cast application trainer with flow simulation, haptics, and sensing to bridge theory and clinical practice."
featured: true
order: 1
timeline: "2025–2026 (Final Year Project)"
role: "Systems integration • embedded sensing • fluidics • prototyping"
tags: ["Haptics", "ESP32", "Fluidics", "Sensors", "Rapid prototyping"]
heroImage: "/images/project1.jpg"
links:
  report: "/assets/EMS690U_Integrated_Design_Project.pdf"
---

## Problem

Traditional fracture trainers are often static: they teach *shape* but not *behaviour*.
We wanted a platform that makes trainees feel realistic cues (flow, compliance, feedback),
and that can measure how the trainee performs — not just whether it “looks right”.

## What I built

- **Fluidic pump architecture** to simulate pulsatile flow through channels.
- **Subcutaneous force sensing** to capture interaction forces during casting.
- **Real-time “pain index” concept** on an ESP32 to turn rough handling into a measurable signal.
- Rapid prototyping workflow (CAD → print → test → iterate) to keep development fast.

## System overview

- **Anatomical core:** 1:1 scale forearm and hand as the integration chassis  
- **Flow pumping system:** programmable pulsatile flow to replicate vascular behaviour  
- **Haptics:** actuators embedded in soft tissue to produce physiological cues  
- **Sensing:** force / interaction measurements for feedback + performance scoring  
- **UI:** simple interface for modes, calibration, and recording

## Design decisions (examples)

- Prioritised **accessibility and cost** over “perfect anatomy” — the goal is training volume and repeatable learning.
- Designed subsystems so each can be tested in isolation before full integration (reduces integration pain).

## Next steps

- Add repeatable calibration routines (baseline, drift checks).
- Collect pilot user data to tune thresholds and validate the “pain index” against expert assessment.
