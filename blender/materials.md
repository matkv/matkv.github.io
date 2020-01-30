---
layout: default
title: Materials
parent: Blender
nav_order: 7
---

# Materials

Under the materials tab, we can for example change the base colour of the material.

The **roughness** of a material defines how reflective it is. (How sharp the reflection looks)

By using the Subsurface settings we can make it look like the light is kind of shining through the material.

## Splitting the view in Blender

We can grab any border and right click it and then select "Vertical Split" or "Horizontal Split" in order to split our view.

This is useful when we for example want to look through the camera view but at the same time want to change, for example, the position of the light.

## Remove noise when rendering

One way to remove noise is to increase the sample size for the render, but this will also increase render time.

Blender 2.81 has a de-noiser included. Under Layer  Passes -> Data -> Denoising data. (Cycles renderer needs to be selected)
