---
title: 3D Printed Sim Racing Pedals
subtitle: PETG-CF pedals with force-based braking and an experimental copper finish.
featured: true
order: 3
timeline: 2025 · Personal project
role: Mechanical build, sensing integration and material experiments
tags:
- 3D Printing
- PETG-CF
- Electronics
- Sim Racing
- Load Cell
- Electroplating
heroImage: /images/pedals-hero-1280.webp
category: Personal build · Sensing & manufacture
cardTitle: Load-cell sim racing pedals
outcome: Assembled three-pedal set with load-cell braking
heroAlt: The assembled set of three printed sim racing pedals
heroCaption: The assembled pedal set, with a load-cell brake and potentiometer throttle and clutch.
---

## The goal

Build a three-pedal sim racing set with a force-sensitive brake and scope to adjust the geometry and spring arrangement. I used an open-source pedal guide as the structural starting point, then worked on the sensing and tried a copper finish on the printed pedal faces.

## Sensing and assembly

| Pedal | Sensor | Design choice |
|---|---|---|
| Brake | Load cell | Measures applied force for the braking input |
| Throttle | Potentiometer | Measures pedal position |
| Clutch | Potentiometer | Measures pedal position |

The parts were printed in **PETG-CF** on my modified Ender 3 V3 SE and assembled with off-the-shelf fasteners and return springs. The brake used a heavier spring than the throttle and clutch.

The load-cell amplifier provides the brake signal. Further filtering and calibration would help characterise its behaviour at low forces; I have not presented a measured accuracy or durability result for the pedal set.

## Copper electroplating experiment

I coated a printed pedal face with conductive paint and tried copper deposition using a copper sulphate electrolyte and a copper anode. The aim was to explore whether a metal coating could improve the contact surface.

The result was **partial coverage**. Copper deposited in places, but the finish was uneven. Inconsistent conductivity in the painted layer appeared to be one contributor. A more uniform conductive coating is the next change I would test.

<div class="image-pair"><figure><img src="/images/pedals-plating-1-1280.webp" alt="Printed pedal face submerged in the copper electroplating bath" loading="lazy" width="720" height="1280" /><figcaption>The pedal face in the electrolyte during the coating experiment.</figcaption></figure><figure><img src="/images/pedals-plating-2-1280.webp" alt="Another view of the copper electroplating setup and electrical connections" loading="lazy" width="720" height="1280" /><figcaption>A second view of the bath and electrical connections.</figcaption></figure></div>

## What I would improve

- Replace the throttle and clutch potentiometers with Hall-effect sensing.
- Compare coating methods before repeating the electroplating experiment.
- Refine load-cell calibration and filtering.
- Add a shared mounting plate with adjustable pedal spacing.

This build gave me a useful combination of mechanical assembly, sensor integration and an experimental manufacturing process whose first result still needed work.
