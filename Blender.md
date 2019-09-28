---
layout: page
title: Blender
permalink: /blender/
toc: true
---

**Table of contents**

* Un-numbered table of contents
{:toc}

## Basic Info

Blender is a free 3D-graphics used for creating animated films, visual effects, art, 3D printed models,
motion graphics, interactive 3D applications, and computer games.

## Shortcuts

* G - Move object
* R - Rotate
* S - Scale
* X,Y,Z while doing any of the above actions snaps the object to the axis.
* Middle mouse down whlie doing the above actions - snaps the object to axis automatically
* Middle mouse down in viewport - move view (camera) around (orbit)
* Shift + Middle mouse in viewport -  Pan camera
* Shift + A - Add
* F3 - Searchbar
* TAB - Edit mode
* O - Proportional editing in edit mode
* 1 (Num Pad) - view object from the side
* 7 (Num Pad) - view object from the top 
* Alt + Z - X-Ray mode
* Shift + D - Duplicate selected part
* P - Turn selection into separate object
* Control + L - Select all connected vertices of the one that is clicked
* A - Select all (Alt + A deselect all)
* Alt+Click (Shit+Alt+Click on Linux) selects an edge loop.
* Ctrl + I inverts a selection
* H Hide
* E (when two vertices are selected) Extrude
* Move to collection
* F - change brush size in sculpting mode
* Alt + H - in edit mode, unhide vertices
* Ctrl + P -> set parent
* Numpad 0 -> switch to camera view

## User interface

The main view is called the 3d viewport. This is the area we can see.

### Basic actions on the 3D model

We can move things by going to the toolbar on the left and using the move funciton. We move an object along the three axis: x,y,z

The rotate function lets us rotate the model. Right clicking while rotating cancels the action.

The scale function let's us change the scale of the object.

The faster way to work is to **memorize the hotkeys**:

* Move:  G (grab)
* Rotate: R
* Scale: S

Pushing the button for any axis (x, y or z) while moving, scaling or rotating the object, aligns the object along this axis.

Holding down the middle mouse button after pressing the button for the action snaps the object to the axis lines automatically.

### Moving around in the viewport

If we want to move around the viewport (the area we see) , we can press and hold the middle mouse button  and rotate (orbit) around the view.

Holding shift + middle mouse button enables us to pan and move to other parts of the viewport.

The scrollwheel zooms in and out on the viewport.

If we want to focus on a selected object we can press the period key on the numpad.

### Adding objects

We can add a new object by pressing Shift+A, we can delete a selected object using the delete key.

## Modelling

It is generally a good idea to match the size of the model to its real world counterpart. 

When it comes to setting the resolution of the object (the segments) we generally want to use a lower resulution because that's easier to work with.

We can switch from object mode into edit mode by clicking or using the TAB key. There we can use the same hotkeys as before.

### Making an object look less perfect

To make something look realistic it is often necessary to make it look less perfect. We can go to the edit mode and use the **proportional editing tool** (Shortcut O) . Scrolling up or down while using it will make a circle appear which lets us focus to the area we are editing.
 
 This affects not only the selected dot in edit mode but also the dots around it - this lets us make the object look uneven & less "perfect".   

If we want to make our object look smooth again (it doesn't look smooth with the low segment settings). We can right click it in object mode and select "Shade smooth".

If we want to actually smooth the edges of the object we need to use a **sub surface modifier**. It basically takes a phase (are connected by 4 dots) and adds another one calculated by the average, on it. (Doubles the resolution and averages it).

In the properties on the right, we click on the wrench - the modifier panel, click add modifier, Subdivision Surface.

Modifiers are **non-destructive** - we can always change the settings later, nothing is lost.

## Mesh and Modifiers

To be able to select "through" the whole object in edit mode, we need to enable X-Ray mode. (Symbol in top right corner) or Alt + Z.

To duplicate the selected part, we press Shift + D, and Escape to cancel the movement.

To make the new selection a separate object, we press P.

If we want to make an object thicker, we can add the Solidify modifier. This adds thickness to any mesh.

We can disable showing the solidifier modifier specifically for the edit mode so it is not visible while in edit mode.

If we want to add more squares to our mesh, we can right click it and select "Subdivide".

Alt+Click (Shit+Alt+Click on Linux) selects an edge loop. That way we can make a selection across the whole mesh but only one "row". Control + I inverts the selection.

When we want our grid to stick to the object we can set the snap option to **face**. (Select project individual Elements if the neighbours should also be affected)

When pressing "E" while having two vertices selected we can extrude them and create two new ones.

## Sculpting

### Backing up our objects

When adding a modifier to an object, it is a good idea to keep a copy of the object before the modifier was applied because we cant really revert or undo it completely once it's done.

We can select some objects, press Shift+D to duplicate and then select them and press "M" - move them to a collection (and hide that collection by unchecking the box next to the name).

### Sculpting mode

Once we have switched to the sculpting mode, we can change our brush size with "F".

By default, "X-Symmetry Mirror" is turned on by default, we can disable it by de-selecting the "X" in the top right corner. (It would be useful if we were sculpting a face because it would mirror both sides).  

Then we can use the different brushes to modify our object by adding to it, taking away from it or smoothing it.  

## Lighting & Rendering

By selecting viewport shading: rendered  - in the top right corner view can look at our model in a more realistic look with the lighting and materials.

The 3D cursor is where new objects will be placed, so if we want to add a plane to our current objects it will be placed on the 3D cursor.

### Adding a plane

We can add a plane by pressing Shift + A -> Plane. If we want to group or link two objects together, we need to parent them. We select the object that we want to be the child, then the parent and press Control + P, and then select object (keep transform). In the outliner (right side), the child might be collapsed under the parent object.

### Rendering

In order to see an object in the viewport, Blender is using a rendering engine. The default rendering engine in Blender is called Eevee. It is a real time rendering mode and really fast. It is a bit tricky to make it look correct with lighting and shadows.

The other main rendering engine is called Cycles. It is usally more realistic, but has longer render times. We can switch to it under the Render menu on the right side. And set device to GPU.

To see what will actually be rendered, we need to look through the camera view (Numpad 0). When in camera view, we can press N to get the menu, and then under view select "Lock Camera to View" which will let us use the normal ways to move through the viewport to move the camera.

We can play with the lighting and camera position to get the desired effect.

Then we can go to the render menu and render the image and save it.

## Materials

Under the materials tab, we can for example change the base colour of the material.

The **roughness** of a material defines how reflective it is. (How sharp the reflection looks)

By using the Subsurface settings we can make it look like the light is kind of shining through the material.

### Splitting the view in Blender

We can grab any border and right click it and then select "Vertical Split" or "Horizontal Split" in order to split our view.

This is useful when we for example want to look through the camera view but at the same time want to change, for example, the position of the light.

### Remove noise when rendering

One way to remove noise is to increase the sample size for the render, but this will also increase render time.

Blender 2.81 has a de-noiser included. Under Layer  Passes -> Data -> Denoising data. (Cycles renderer needs to be selected)

# Modeling 
## Particle duplication

If we have several small object that we want to scatter across another object (for example sprinkles on a donut) we can use **particle instances**. It is duplicating an object on the surface of another object.

On the object on which we want our smaller objects, we go to the particles menu, and select hair. Then under the submenu Render, and select **Render as object** and set the instance object as the small object. 

There we can set the scale and randomness. For rotation, we need to check the advanced checkbox.

Under the rotation submenu, we set the rotation axis to normal, and modify randomize phase.

To make sure the sprinkles only appear where we want them (on top of the icing and not underneath) we can use the weight paint mode and draw the area that we want, then under Particles -> Vertex Groups, we set the Density to Group so that our painted area will be used. The particles (sprinkles) will be only placed in that area.

The amount of the particles. can be changed under, Emmision - Number.