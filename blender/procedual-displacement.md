---
layout: default
title: Procedual displacement
parent: Blender
nav_order: 9
---

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