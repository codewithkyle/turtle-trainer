import { Module } from 'Module';
import { Application } from 'Application';
import { Env } from 'Env';
import * as THREE from 'three';

export class View extends Module{
    public static index:string = 'View';

    private _scene: THREE.Scene;
    private _camera: THREE.PerspectiveCamera;
    private _renderer: THREE.WebGLRenderer;
    
    private _cube: THREE.Mesh;

    private _canvasWrapper:HTMLElement;
    private _editorWrapper:HTMLElement;

    constructor(view:HTMLElement, uuid:string){
        super(view, uuid);
        if(Env.isDebug){
            console.log('%c[Module Manager] '+`%ccreated new %c${ View.index } %cmodule with an ID of %c${ uuid }`,'color:#4882fd','color:#eee','color:#48eefd','color:#eee','color:#48eefd');
        }

        this._scene = new THREE.Scene();
        this._camera = new THREE.PerspectiveCamera( 75, 2, 0.1, 1000 );
        this._renderer = new THREE.WebGLRenderer({canvas: this.view.querySelector('.js-canvas')});

        this._canvasWrapper = this.view.querySelector('.js-canvas-wrapper');
        this._editorWrapper = this.view.querySelector('.js-gui-wrapper');
    }

    private resizeCanvas():void{
        const canvas = this._renderer.domElement;

        // look up the size the canvas is being displayed
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        // adjust displayBuffer size to match
        if (canvas.width !== width || canvas.height !== height) {

            // you must pass false here or three.js sadly fights the browser
            this._renderer.setSize(width, height, false);
            this._camera.aspect = width / height;
            this._camera.updateProjectionMatrix();
        }
    }

    private animate():void{
        this.resizeCanvas();

        this._cube.rotation.x += 0.01;
        this._cube.rotation.y += 0.01;

        this._renderer.render( this._scene, this._camera );
        requestAnimationFrame(()=>{ this.animate() });
    }

    private makeBox():void{
        var geometry = new THREE.BoxGeometry( 1, 1, 1 );
        var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        this._cube = new THREE.Mesh( geometry, material );
        this._scene.add( this._cube );

        this._camera.position.z = 5;
    }

    afterMount(){
        this.makeBox();
        this.animate();
    }

    beforeDestroy(){

    }
}

// Adds module to the global Modules object
modules[View.index] = View;
if(Env.isDebug){
    console.log('%c[Module Manager] '+`%cmodule %c${ View.index } %chas finished loading`,'color:#4882fd','color:#eee', 'color:#48eefd', 'color:#eee');
}
Application.mountModules();
