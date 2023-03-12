# A-frame-visuals
I will put here successfully implemented materials and postprocessing visual effects for A-frame on it's last version

# Hide objects behind/inside an invisible GLTF, so "masking" or "occlusion" effect.
Tested with a-frame 1.4.0, (iOS/Android/PC) in WebAR using Zappar, on insepctor works too, I will test this with other A-frame ar libraries and VR

How to:

1- Include this script in your html, or copy the a-frame component in you code
Materials/occlussion-material.js

![a-frame_1 4 0_occlusion_material](https://user-images.githubusercontent.com/9389898/224532977-501bcd8e-2664-4f60-a62b-66678d2dd8ab.png)


2- Declare your entity with gltf above the objects you wish to hide, with the name of the component


![a-frame_1 0_occlusion_materia](https://user-images.githubusercontent.com/9389898/224534563-ad38c7df-fc4b-4f60-9a2c-df40ec8673b8.png)
