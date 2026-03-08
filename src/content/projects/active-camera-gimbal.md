---
title: "Active Camera Gimbal"
subtitle: "DIY 2-axis stabiliser with custom C++ firmware and real-time PID control loops."
featured: false
order: 3
timeline: "Personal project"
role: "Embedded C++ • control tuning • mechanical build"
tags: ["Embedded C++", "PID Control", "Mechatronics"]
heroImage: "/images/project3.jpg"
---

## Goal

Build a compact stabiliser that keeps a camera level against movement — then make it *actually feel stable*, not just “move”.

## What I built

- Real-time **PID loops** for stabilisation
- Firmware architecture focused on **predictable timing** (control loops hate jitter)
- Mechanical layout designed for stiffness and smooth motion

## What I’d improve next

- Add better IMU filtering (e.g., complementary / Kalman) and quantify latency.
- Create a proper tuning workflow (step responses, frequency response checks).
