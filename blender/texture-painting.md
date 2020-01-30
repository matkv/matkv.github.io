---
layout: default
title: Texture Painting
parent: Blender
nav_order: 8
---

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