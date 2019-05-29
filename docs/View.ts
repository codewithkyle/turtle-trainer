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

    constructor(view:HTMLElement, uuid:string){
        super(view, uuid);
        if(Env.isDebug){
            console.log('%c[Module Manager] '+`%ccreated new %c${ View.index } %cmodule with an ID of %c${ uuid }`,'color:#4882fd','color:#eee','color:#48eefd','color:#eee','color:#48eefd');
        }

        this._scene = new THREE.Scene();
        this._camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        this._renderer = new THREE.WebGLRenderer();
    }

    private animate():void{
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
        this._renderer.setSize( window.innerWidth, window.innerHeight );

        const article = document.body.querySelector('#homepage');
        article.appendChild( this._renderer.domElement );

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
