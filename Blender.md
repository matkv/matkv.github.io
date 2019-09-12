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