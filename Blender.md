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

## Randomizing the colours of mulitple objects

Under teh Shading tab, we select our original object (first small sprinkle of the donut). And add a material if there is none, and then shift + a add an object info node (under input).

We can then take the random value from the object info node, and connect it to the base color of our sprinkle! By default, this is giving our small objects a random value between white and black. (so its some grey value.)

If we want other colours to be used to, we need to put a **Color ramp** (submenu Converter) between the object info node and the main one. There we can set the colours that we want to use.

## Randomizing the height of multiple objects

Instead of just referencing one object as the original object of many, we can reference a whole group with, for example, different heights. Under **instance collection** we select the collection of objects that should be used.


Control + R creates a loop cut, the scrollwheel selects how many loops.

We can set the origin points of these objects to **Origin to geometry** so that they are only laying on top of the icing.

In order to have less of a certain type of object in our collection be used on the main object, we need to check **use count** and increase the importance/amount of everything else.

# Texture Painting

When we select the UV Editing tab, and select our mesh we can see the UV -> basically a "2D image" that wraps around the mesh on which the "paint" would be applied (kind of like the wrapper of candy)

Under the Texture Paint tab we select "New" -> we set the image width to be twice as long as the height.

Under the Shading tab, we add an Image texture (Texture -> Image Texture) and connect the Color dot to the "Base color" dot of the main donut (Principled BSDF) and select our newly created image as the texture image.

We should also save the created image separately.

To set the base color, we press N. Now we can paint over the texture image.

To switch to the secondary color, we can press X.

We can also draw directly on the model if that's easier.

In order to make the painted area look more realistic and to make it less obvious that it was painted by hand, we should use a **Texture Mask**.

Under Texture Mask we create a new texture, then under the Texture menu of our model we select Brush - Mask Texture. For the donut example, we set the type to "Clouds".

We can also set the Mask Mapping of the texture mask to "Random", this will make our texture look less even and repetitive.

To darken the texture, we can select a black color and set the blend mode to "Overlay".

# Procedual displacement

To make our donut look more realistic, we are going to add a procedual texture. In the Shading tab, we add (with Shift + A) a **Noise texture**.

If we enable the "Node wrangler" addon, we can Ctrl + Shift + Left Click a node to preview it in our model.

We also add a "Texture Coordinate" node and connect its "object" output to the "vector" input of the noise texture node. Now the noise texture node will use the object data.

Then we add a "Displacement" node (Vector -> Displacement) and connect the "Fac" (Factor) output of the noise texture node and connect it to the "heigth" input of the displacement node.

Then we connect the "Displacement" output of the displacement node to the "Displacement" input of the Material output node.

This, however, will not change the actual shape of our mesh yet - so far it is just changing the look of the texture. 

With the Cycles rendering engine active (!!!) - >Under the Material tab on the right, under Settings -> Surface -> we change the Displacement setting to "Displacement and Bump". (We need to make sure that the Scale of the displacement node is not set too high).

Then we can play with the Scale setting for the displacement node and the Scale setting of the Noise texture node to get the result that we want.

To add more general noise to our donut, we can duplicate the noise texture tool and connect the texture coordinate node to it as well.

Connecting the factor output of both nodes to the color1 and color2 inputs of a MixRGB Node (Texture -> MixRGB) and settings its blend mode to "Add" & connecting the color output node to the height input of the displacement node, we can use both nodes for our displacement.

This will however still have a quite unrealistic look for the donut. We can add a ColorRamp node between the new noise texture node and the MixRGB node (might be labeled "Add" now) and then move the black slider so that the the displacement will only use a part of the black & white values.

The displacement is, at the moment, only affecting the "bumps" in the texture of the donut and not the color.

So we want to use the different values that are produced with our noise texture nodes not only for the displacement node, but also for our base color of the donut.

We add another MixRGB node between the donut texture node and the BSDF node for the whole donut. We take the color output of the first mixRGB node ("Add") and connect it to the "Fac" input of the new MixRGB node.

Now we can change the Blend type of the new MixRGB node to "Overlay" and change the color2 property and this will actually affect the color of the bumps that we created with the displacement.

# Tutorial - Coffee Cup

## Adding a reference photo

We can add a reference image with Shift + A -> Image -> Reference (Align To View checked off).

Then we model a cylinder along it with edge loops (adding more with Control + R). And then scaling along it. Control R -> then S and scale it to fit the shape.

Selecting a face with Shift + Alt + Left Click, then pressing X lets us delete that specific face. (For example the top of the rough model of the coffee cup so that it is hollow.)

To make the cylinder thicker, we add a solidify modifier. To clean up some details, we also add the subdivision surface modifier.