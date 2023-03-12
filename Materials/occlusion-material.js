AFRAME.registerComponent('occlusion-material', {
    init: function() {
        this.el.addEventListener('model-loaded', e=>{
            let mesh = this.el.getObject3D('mesh')
            if (mesh !== undefined) {
                mesh.traverse(function(node) {
                if (node.isMesh) {
                    if (node.material){
                        console.log(node)
                        var material = new THREE.MeshBasicMaterial( {colorWrite: false} );
                        node.material = material;
                    }
                }
                });
            }
        });
    }
});