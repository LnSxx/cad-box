import React from "react";
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import './css/Renderer.css'

class Renderer extends React.Component {
    
    componentDidMount() {
        this.sceneSetup();
        this.addCustomSceneObjects();
        this.startAnimationLoop();
        window.addEventListener('resize', this.handleWindowResize);
    }

    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            while(this.scene.children.length > 0){ 
                this.scene.remove(this.scene.children[0]); 
            }
            this.addCustomSceneObjects();
        }
      }

    sceneSetup = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75, 
            width / height, 
            0.1, 
            1000 
        );
        this.camera.position.z = 200;
        this.controls = new OrbitControls( this.camera, this.mount );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( width, height );
        this.mount.appendChild( this.renderer.domElement );

    };
    addCustomSceneObjects = () => {
        this.box = new THREE.Group();
        const material = new THREE.MeshStandardMaterial( { color : 0x005cc8 } );
        this.props.data.forEach((item)=>{
            const geometry = new THREE.Geometry();
            item.forEach((point)=>{
                geometry.vertices.push( new THREE.Vector3( point[0], point[1], point[2] ) );
            })
            const normal = new THREE.Vector3( 0, 0, 1 ); 
            const color = new THREE.Color( 0xfff ); 
            const materialIndex = 0; 
            const face = new THREE.Face3( 0, 1, 2, normal, color, materialIndex );
            geometry.faces.push( face );
            geometry.computeFaceNormals();
            geometry.computeVertexNormals();
            this.triangle = new THREE.Mesh( geometry, material )
            this.box.add( this.triangle );
        })
        this.scene.add( this.box );
        const lights = [];
        lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
        lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

        lights[ 0 ].position.set( 0, 200, 0 );
        lights[ 1 ].position.set( 100, 200, 100 );
        lights[ 2 ].position.set( - 100, - 200, - 100 );

        this.scene.add( lights[ 0 ] );
        this.scene.add( lights[ 1 ] );
        this.scene.add( lights[ 2 ] );
    };

    startAnimationLoop = () => {
        this.box.rotation.x += 0.01;
        this.box.rotation.y += 0.01;
        this.renderer.render( this.scene, this.camera );
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    };

    handleWindowResize = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        this.renderer.setSize( width, height );
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    };

    render() {
        return <div className='renderer' ref={ref => (this.mount = ref)} id='testID'/>;
    }
}

export default Renderer


