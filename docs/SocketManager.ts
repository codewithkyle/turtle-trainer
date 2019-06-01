import { Module } from 'Module';
import { Application } from 'Application';
import { Env } from 'Env';
import * as io from 'socket.io-client';

export class SocketManager extends Module{
    public static index:string = 'SocketManager';

    private static readonly SERVER:string = '134.209.117.116';
    private static readonly PORT:string = '6502';

    /** Socket */
    private static _socket: SocketIO.Socket;
    private static _socketErrorMessage:HTMLElement = document.body.querySelector('.js-socket-error-message');

    constructor(view:HTMLElement, uuid:string){
        super(view, uuid);
        if(Env.isDebug){
            console.log('%c[Module Manager] '+`%ccreated new %c${ SocketManager.index } %cmodule with an ID of %c${ uuid }`,'color:#4882fd','color:#eee','color:#48eefd','color:#eee','color:#48eefd');
        }
    }

    /**
     * Listens for a custom event to be sent from the server. Returns `false` when the socket is not connected to the server.
     * @param eventName - the name of the event the socket will listen for
     * @param callback - the events callback `Function`
     * @returns `boolean` containing the events success status
     * @example SocketManager.emit('signupResponse', this.handleSignupResponse);
     */
    public static recieve(eventName:string, callback:Function):boolean{
        if(this._socket.connected){
            this._socket.on(eventName, data => { callback(data) });
            return true;
        }

        if(Env.isDebug){
            console.warn('Event failed to be emitted, the socket is not currently connect to the server.');
        }

        return false;
    }

    /**
     * Sends a custom event to the server. Returns `false` when the socket is not connected to the server.
     * @param eventName - the name of the event the socket will fire
     * @param eventObject - a `JSON` object that should be sent with the event
     * @returns `boolean` containing the events success status
     * @example SocketManager.emit('register', { name: 'john smith' });
     */
    public static emit(eventName:string, eventObject?:unknown):boolean{
        if(this._socket.connected){
            this._socket.emit(eventName, eventObject);
            return true;
        }

        if(Env.isDebug){
            console.warn('Event failed to be emitted, the socket is not currently connect to the server.');
        }

        return false;
    }

    /**
     * Called when the client fails to connect to the server after several attempts.
     * Used to display a server connection error to the user.
     */
    private static connectionFailed():void{
        if(Env.isDebug){
            console.log(`Server connection could not be establised with the server at ${ SocketManager.SERVER }:${ SocketManager.PORT }`);
        }

        this._socketErrorMessage.classList.add('is-visible');
    }

    private static handleConnection():void{
        if(Env.isDebug){
            console.log(`Server connection establised with ${ SocketManager.SERVER }:${ SocketManager.PORT }`);
        }
    }

    /**
     * Constructs a promise around the Socket.io connection method.
     * Resolves when the connection is established.
     * Rejects when the connection errors or times out.
     */
    private static connect():any{
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
        SocketManager.connect()
        .then(()=>{
            SocketManager.handleConnection();
        })
        .catch(() => {
            SocketManager.connectionFailed();
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
