---
title: Active Camera Gimbal
subtitle: A two-axis camera stabiliser with custom C++ firmware and real-time PID control.
featured: false
order: 5
timeline: Personal project
role: Mechanical build, embedded programming and control tuning
tags:
- Embedded C++
- PID Control
- Mechatronics
heroImage: /images/project3-1280.webp
category: Embedded systems · Control
outcome: Working two-axis stabiliser integrating hardware and firmware
heroAlt: Printed camera gimbal with a mounted GoPro, servos, wiring and microcontroller
heroCaption: The assembled two-axis gimbal, with its embedded electronics visible.
---

## The goal

Build a compact two-axis stabiliser that keeps a camera level as its base moves. I wanted to connect the control theory with the practical behaviour of a real mechanism.

## What I built

I assembled a printed mechanical frame, actuators and an embedded microcontroller, then wrote custom **C++ firmware** with real-time **PID control loops** for stabilisation.

The work connected three parts of the problem:

| Area | My focus |
|---|---|
| Mechanical design | A frame that supports the camera and allows movement about two axes |
| Electronics | Integrating sensing, actuators and the controller |
| Firmware | Predictable control-loop timing and PID tuning |

## What I would improve

The next step is to make the tuning process more measurable. I would record step responses and latency, then compare filtering options for the inertial measurements. Those are planned improvements, rather than performance results from this build.
