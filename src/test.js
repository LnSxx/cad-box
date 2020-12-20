import React from "react";
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const style = {
    height: 1000 // we can control scene size by setting container dimensions
};

class Renderer extends React.Component {
    constructor(props) {
        super(props)
        this.boxdata = this.props.data
    }
    componentDidMount() {
        this.sceneSetup();
        this.addCustomSceneObjects();
        this.startAnimationLoop();
        window.addEventListener('resize', this.handleWindowResize);
    }

    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.handleWindowResize);
    //     window.cancelAnimationFrame(this.requestID);
    //     this.controls.dispose();
    // }

    sceneSetup = () => {
        const width = this.mount.clientWidth;
        const height = this.mount.clientHeight;
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75, // fov = field of view
            width / height, // aspect ratio
            0.1, // near plane
            1000 // far plane
        );
        this.camera.position.z = 9;
        this.controls = new OrbitControls( this.camera, this.mount );
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize( width, height );
        this.mount.appendChild( this.renderer.domElement );

    };
    addCustomSceneObjects = () => {
        // const material = new THREE.MeshPhongMaterial( {
        //     color: 0x156289,
        //     emissive: 0x072534,
        //     side: THREE.DoubleSide,
        //     flatShading: true
        // } );
        // this.props.data.boxData.forEach((item)=>{
            
        // })
        const material = new THREE.MeshStandardMaterial( { color : 0x00cc00 } );
            const geometry = new THREE.Geometry();
            // item.forEach((point)=>{
            //     geometry.vertices.push( new THREE.Vector3( point[0], point[1], point[2] ) );
            // })
            geometry.vertices.push( new THREE.Vector3( -50, -50, 0 ) );
            geometry.vertices.push( new THREE.Vector3(  50, -50, 0 ) );
            geometry.vertices.push( new THREE.Vector3(  50,  50, 0 ) );
            //create a new face using vertices 0, 1, 2
            const normal = new THREE.Vector3( 0, 0, 1 ); //optional
            const color = new THREE.Color( 0xfff ); //optional
            const materialIndex = 0; //optional
            const face = new THREE.Face3( 0, 1, 2, normal, color, materialIndex );
            //add the face to the geometry's faces array
            geometry.faces.push( face );
            //the face normals and vertex normals can be calculated automatically if not supplied above
            // geometry.computeFaceNormals();
            // geometry.computeVertexNormals();
            this.sefe = new THREE.Mesh( geometry, material )
            this.scene.add( this.sefe );
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
        console.log(this.scene.children)
    };

    startAnimationLoop = () => {
        this.sefe.rotation.x += 0.01;
        this.sefe.rotation.y += 0.01;
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
        return <div style={style} ref={ref => (this.mount = ref)} />;
    }
}

export default Renderer
