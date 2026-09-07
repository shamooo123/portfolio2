---
title: Fracture Immobilisation Trainer
subtitle: An anatomical forearm with embedded sensing, layered silicone and a material study.
featured: true
order: 1
timeline: 2025–2026 · Final year project
role: Anatomical core lead in a five-person team
tags:
- Haptics
- ESP32
- Fluidics
- Sensors
- 3D Printing
- Blender
- Silicone Casting
- Rapid Prototyping
heroImage: /images/trainer-printing.webp
links:
  report: /assets/EMS690U_Integrated_Design_Project.pdf
  report2: /assets/EMS690U_Detailed_Design_Report_Hishaam_Abbasi_Complete-1.pdf
  report2Label: Download Individual Report
  video: https://youtu.be/kSiA5kM77s0
category: Medical training · Design & manufacture
outcome: Functional training prototype; estimated materials cost under £500
heroAlt: Printed forearm and hand components on the printer bed
heroCaption: The printed anatomical core during manufacture. Photograph from my individual design report.
---

## The brief

Build an adult-scale forearm for practising fracture immobilisation, with feedback from the physical model. The team combined an anatomical core, flow pumping, haptics, sensing and a user interface in one prototype.

I led the **anatomical core workstream** in a five-person team. My responsibility was the physical structure that the other systems had to fit into: the skeleton, soft tissue, moulds and internal routing. I also integrated Hall-effect sensing at the fracture site with an ESP32 for real-time alignment feedback.

## Designing the core

I modelled the 1:1 forearm in **Blender**, including the fracture site, joints and routes for fluid tubing, sensor wiring and haptic actuators. These interfaces needed agreement across the team before printing, because a small change in one subsystem could force another part to be remade.

| Interface | Design consideration |
|---|---|
| Skeleton and fracture site | Maintain the anatomical form while allowing the fracture fragments to move |
| Fluidics | Route tubing through the core without obstructing the other systems |
| Sensing | Place Hall-effect sensors and wiring around the fracture site |
| Haptics | Provide space for actuators within the soft tissue |
| Soft tissue | Use replaceable moulded sections around the printed structure |

<figure><img src="/images/trainer-fracture-cad.webp" alt="Blender model showing the simulated fracture site in the radius" loading="lazy" width="1336" height="854" /><figcaption>The fracture geometry in Blender, from my individual design report.</figcaption></figure>

## Choosing a material

I compared **four FDM materials** using a cantilever deflection test under progressive loading. The aim was to compare how the printed specimens responded across the test range, rather than choose solely from a material datasheet.

| Material | Observation in the study |
|---|---|
| PETG-CF | The most consistent apparent elastic response across the loading range |
| PLA | Apparent stiffness decreased as loading increased; visible whitening at the highest load |
| ASA-CF | Intermediate behaviour, with mild whitening at the highest load |
| ABS | Drift in the measured response and the strongest visible whitening |

I selected **PETG-CF** for the intended load-bearing elements. Material availability meant the prototype used PLA and ASA-CF in places. That distinction matters: the selected material and the material in the prototype were not identical.

The rig was useful for comparison, but the deflections were large relative to the specimens. I therefore treat the calculated modulus values as approximate. The study did not establish long-term fatigue life; repeated-load testing remains future work.

<figure><img src="/images/trainer-testing.webp" alt="The material test setup during the cantilever study" loading="lazy" width="899" height="585" /><figcaption>The material test setup. The results informed material selection, with the limitations of the rig recorded in the report.</figcaption></figure>

## Manufacturing the soft tissue

I designed and printed multi-part moulds around the final bone geometry. The soft tissue used two silicone layers: **Dragon Skin 30A** for the muscle layer and **Ecoflex 00-30** for the skin.

Casting came after checking the skeleton and internal routes. The modular arrangement also allowed individual soft-tissue sections to be replaced without remaking the entire core.

<div class="image-pair"><figure><img src="/images/trainer-moulds.webp" alt="Printed forearm moulds and cast components on the workbench" loading="lazy" width="477" height="702" /><figcaption>Moulds and soft-tissue components during manufacture.</figcaption></figure><figure><img src="/images/trainer-build.webp" alt="Anatomical trainer components, showing the skeleton and removable soft-tissue layers" loading="lazy" width="828" height="812" /><figcaption>The skeleton and moulded layers at different stages of assembly.</figcaption></figure></div>

## Outcome and next steps

The team produced a functional training prototype with an **estimated materials cost below £500**. My work combined CAD, material comparison, FDM printing, silicone casting and sensing integration.

Informal handling comparisons favoured the layered soft tissue over uniform samples. That was qualitative feedback, not clinical validation. Full cyclic testing and formal clinical evaluation were still outstanding at the end of the project.

The main lesson was to settle physical interfaces early. A modular design only saves work if dimensions, tolerances and routing are clear enough for every workstream to build against them.

## Reports and proposal video

The [group report](/assets/EMS690U_Integrated_Design_Project.pdf) covers the complete system. My [individual report](/assets/EMS690U_Detailed_Design_Report_Hishaam_Abbasi_Complete-1.pdf) gives the detail behind the anatomical core, material study and manufacture.

The video below introduces the project proposal.

<div class="video-embed"><iframe src="https://www.youtube-nocookie.com/embed/kSiA5kM77s0" title="Fracture Immobilisation Trainer: project proposal" loading="lazy" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
