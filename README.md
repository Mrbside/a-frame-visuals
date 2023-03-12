# a-frame-visuals
I will put here successfully implemented materials and postprocessing visual effects for A-frame on it's last version

# Hide objects behind/inside an invisible GLTF, so "maksing" or "occlusion" effect.
Tested with a-frame 1.4.0, (iOS/Android/PC) in WebAR using Zappar, on insepctor works too, I will test this with other A-frame ar libraries and VR

How to:

1- Include this script on your html, or copy the a-frame component in you code
Materials/occlussion-material.js

![a-frame_1 4 0_occlusion_material](https://user-images.githubusercontent.com/9389898/224532977-501bcd8e-2664-4f60-a62b-66678d2dd8ab.png)


2- Declare your entity with gltf above the objects you wish to hide, with the name of the component

<a-entity id="box" scale="1 1 1" position="0 0 0" rotation="0 0 0" visible="true" gltf-model="#id_of_my_gltf_in_a-assets" occlusion-material ></a-entity>
----- Declare here entities you want to hide -----
