---
layout: default
title: Modelling
parent: Blender
nav_order: 3
---

# Modelling

It is generally a good idea to match the size of the model to its real world counterpart. 

When it comes to setting the resolution of the object (the segments) we generally want to use a lower resulution because that's easier to work with.

We can switch from object mode into edit mode by clicking or using the TAB key. There we can use the same hotkeys as before.

## Making an object look less perfect

To make something look realistic it is often necessary to make it look less perfect. We can go to the edit mode and use the **proportional editing tool** (Shortcut O) . Scrolling up or down while using it will make a circle appear which lets us focus to the area we are editing.
 
 This affects not only the selected dot in edit mode but also the dots around it - this lets us make the object look uneven & less "perfect".   

If we want to make our object look smooth again (it doesn't look smooth with the low segment settings). We can right click it in object mode and select "Shade smooth".

If we want to actually smooth the edges of the object we need to use a **sub surface modifier**. It basically takes a phase (are connected by 4 dots) and adds another one calculated by the average, on it. (Doubles the resolution and averages it).

In the properties on the right, we click on the wrench - the modifier panel, click add modifier, Subdivision Surface.

Modifiers are **non-destructive** - we can always change the settings later, nothing is lost.

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
