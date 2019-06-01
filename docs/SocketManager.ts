import { Module } from 'Module';
import { Application } from 'Application';
import { Env } from 'Env';
import * as io from 'socket.io-client';

export class SocketManager extends Module{
    public static index:string = 'SocketManager';

    private static readonly SERVER:string = '127.0.0.1';
    private static readonly PORT:string = '6502';

    /** Socket */
    private _socket: SocketIO.Socket;
    private _socketErrorMessage: HTMLElement;

    constructor(view:HTMLElement, uuid:string){
        super(view, uuid);
        if(Env.isDebug){
            console.log('%c[Module Manager] '+`%ccreated new %c${ SocketManager.index } %cmodule with an ID of %c${ uuid }`,'color:#4882fd','color:#eee','color:#48eefd','color:#eee','color:#48eefd');
        }

        this._socketErrorMessage = document.body.querySelector('.js-socket-error-message');
    }

    /**
     * Called when the client fails to connect to the server after several attempts.
     * Used to display a server connection error to the user.
     */
    private connectionFailed():void{
        if(Env.isDebug){
            console.log(`Server connection could not be establised with the server at ${ SocketManager.SERVER }:${ SocketManager.PORT }`);
        }

        this._socketErrorMessage.classList.add('is-visible');
    }

    private handleConnection():void{
        if(Env.isDebug){
            console.log(`Server connection establised with ${ SocketManager.SERVER }:${ SocketManager.PORT }`);
        }
    }

    private connect():any{
        return new Promise((resolve, reject)=>{
            this._socket = io.connect(`${ SocketManager.SERVER }:${ SocketManager.PORT }`);
            this._socket.once('connect', (socket)=>{
                resolve(socket);
            });
            this._socket.once('connect_error', ()=>{
                reject(new Error('connect_error'));
            });
            this._socket.once('connect_timeout', ()=>{
                reject(new Error('connect_timeout'));
            });
        });
    }

    afterMount(){
        this.connect()
        .then(()=>{
            this.handleConnection();
        })
        .catch(() => {
            this.connectionFailed();
        });
    }

    beforeDestroy(){

    }
}

// Adds module to the global Modules object
modules[SocketManager.index] = SocketManager;
if(Env.isDebug){
    console.log('%c[Module Manager] '+`%cmodule %c${ SocketManager.index } %chas finished loading`,'color:#4882fd','color:#eee', 'color:#48eefd', 'color:#eee');
}
Application.mountModules();
