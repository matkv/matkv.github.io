---
layout: default
title: Lighting & Rendering
parent: Blender
nav_order: 6
---

# Lighting & Rendering

By selecting viewport shading: rendered  - in the top right corner view can look at our model in a more realistic look with the lighting and materials.

The 3D cursor is where new objects will be placed, so if we want to add a plane to our current objects it will be placed on the 3D cursor.

## Adding a plane

We can add a plane by pressing Shift + A -> Plane. If we want to group or link two objects together, we need to parent them. We select the object that we want to be the child, then the parent and press Control + P, and then select object (keep transform). In the outliner (right side), the child might be collapsed under the parent object.

## Rendering

In order to see an object in the viewport, Blender is using a rendering engine. The default rendering engine in Blender is called Eevee. It is a real time rendering mode and really fast. It is a bit tricky to make it look correct with lighting and shadows.

The other main rendering engine is called Cycles. It is usally more realistic, but has longer render times. We can switch to it under the Render menu on the right side. And set device to GPU.

To see what will actually be rendered, we need to look through the camera view (Numpad 0). When in camera view, we can press N to get the menu, and then under view select "Lock Camera to View" which will let us use the normal ways to move through the viewport to move the camera.

We can play with the lighting and camera position to get the desired effect.

Then we can go to the render menu and render the image and save it.