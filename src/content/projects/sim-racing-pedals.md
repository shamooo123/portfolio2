---
title: "3D Printed Sim Racing Pedals"
subtitle: "A fully custom three-pedal sim racing set with load cell braking, potentiometer throttle and clutch, and an experimental copper electroplating attempt — printed in PETG-CF on a modified Ender 3."
featured: true
order: 3
timeline: "2025"
role: "Design • 3D printing • electronics • experimental manufacturing"
tags: ["3D Printing", "PETG-CF", "Electronics", "Sim Racing", "Load Cell", "Electroplating"]
heroImage: "/images/pedals-hero.jpg"
---

## The Goal

Commercial sim racing pedals with a proper load cell brake start at around £200–300 — and even then the feel is often compromised by cheap potentiometers on the throttle and clutch. The goal here was to build a set from scratch that matches the sensing quality of mid-range commercial options at a fraction of the cost, with the added freedom to tune geometry and spring rates to preference.

The build follows an open-source pedal guide as a structural starting point, with custom modifications to the sensing architecture and a somewhat experimental attempt at copper electroplating the pedal faces for added surface hardness.

---

## Sensing Architecture

The sensing approach was chosen carefully for each pedal based on what matters most in use:

| Pedal | Sensor | Reason |
|---|---|---|
| **Brake** | Load cell | Brake input should respond to force, not position — this is how real cars work |
| **Throttle** | Potentiometer | Position-based is fine; planned upgrade to Hall effect for longevity |
| **Clutch** | Potentiometer | Same as throttle; bite point feel matters more than absolute precision |

Using a load cell on the brake is the key differentiator from budget pedals. A potentiometer brake gives a mushy, travel-based response — a load cell means the harder you push, the more braking you get, regardless of pedal position. This is much closer to real brake feel and significantly improves lap consistency.

The potentiometers on throttle and clutch are a pragmatic starting point. The planned upgrade is to Hall effect sensors, which have no physical contact between moving parts — they last essentially forever and have no dead zones or wear characteristics. Potentiometers will develop dead spots over time with heavy use.

---

## Materials and Printing

All structural components were printed in **PETG-CF** (carbon fibre reinforced PETG) on a modified Ender 3 V3 SE. PETG-CF was chosen for its combination of:

- Higher stiffness than standard PETG due to the carbon fibre fill
- Better layer adhesion and ductility than PLA-CF
- Resistance to the repeated flex loading that pedals experience

The carbon fibre reinforcement is particularly relevant here — pedal faces and mounting brackets experience high cyclic loads from repeated hard braking, and PLA would creep or delaminate over time. PETG-CF maintains dimensional stability under these conditions significantly better.

The distinctive textured surface finish visible on the pedal faces comes from the carbon fibre reinforcement — it's not a post-processing step, just the natural surface quality of CF-filled filament at fine layer heights.

---

## Copper Electroplating Experiment

The most unconventional part of this build was an attempt to copper plate the 3D printed pedal faces. The motivation was straightforward: copper has significantly higher hardness and wear resistance than bare PETG, and a thin metallic shell would protect the surface from the abrasion of shoe soles over thousands of hours of use.

The process used copper sulphate electrolyte solution with a copper wire anode. The printed parts were first coated in conductive paint to give the non-conductive plastic a surface that ions could deposit onto, then submerged and connected as the cathode in the electroplating circuit.

**Result:** Partial. Copper deposition was visible and measurable in places, but coverage was uneven — the conductive paint layer had inconsistent conductivity across the surface, leading to preferential deposition in some areas. A more controlled application method (spray coating rather than brush coating) would likely improve uniformity significantly. The experiment was a useful proof of concept and the approach is sound — the execution needs refinement.

---

## Assembly

The three-pedal assembly uses a combination of printed structural parts and off-the-shelf hardware:

- M3/M4 bolts and heat-set inserts for all fastened joints
- Coil springs for return force — different spring rates for brake (stiffer) vs throttle/clutch
- Standard 5-pin DIN or USB HID interface for PC connection

The spring arrangement is visible in the assembled photo — the brake uses a noticeably heavier spring than the throttle to simulate the higher force real brake pedals require. The clutch spring is lighter and shorter travel, matching typical sim driving preference.

---

## What's Next

- **Hall effect sensor upgrade** on throttle and clutch to eliminate potentiometer wear
- **Refined copper plating** with spray-applied conductive coating for better coverage uniformity
- **Load cell amplifier tuning** — the HX711 ADC is functional but filtering and calibration can be refined for better linearity at low forces
- **Mounting plate** — currently the pedals sit as individual units; a shared base plate with adjustable spacing would make the set much more usable in a cockpit

---

## Images

![Copper electroplating setup](/images/pedals-plating-1.jpg)


The assembled pedal set showing all three pedals side by side — the heavier blue brake spring is visible in the centre, with the yellow throttle spring to the right.

![Copper electroplating setup 2](/images/pedals-plating-2.jpg)

The copper electroplating setup: pedal face submerged in copper sulphate solution (the teal/green liquid), copper wire anode, and alligator clip connections. The conductive paint coating on the printed surface is visible as a dark layer.
