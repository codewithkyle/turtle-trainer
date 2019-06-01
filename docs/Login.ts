import { Module } from 'Module';
import { Application } from 'Application';
import { Env } from 'Env';
import { SocketManager } from './SocketManager';

interface IRoomCreationResponse{
    token: string;
}

export class Login extends Module{
    public static index:string = 'Login';

    private _loginForm:HTMLFormElement;
    private _loginButton:HTMLButtonElement;
    private _tokenInput:HTMLInputElement;
    private _createRoomButton:HTMLButtonElement;

    constructor(view:HTMLElement, uuid:string){
        super(view, uuid);
        if(Env.isDebug){
            console.log('%c[Module Manager] '+`%ccreated new %c${ Login.index } %cmodule with an ID of %c${ uuid }`,'color:#4882fd','color:#eee','color:#48eefd','color:#eee','color:#48eefd');
        }

        this._loginForm = <HTMLFormElement>this.view;
        this._loginButton = this.view.querySelector('.js-submit-button');
        this._tokenInput = this._loginForm.querySelector('input#token');
        this._createRoomButton = this.view.querySelector('.js-create-room-button');
    }

    private handleError():void{
        Env.stopLoading();
        const errorEl = <HTMLElement>this._tokenInput.parentElement.querySelector('.js-error');
        errorEl.innerHTML = 'Invalid token';
        this._tokenInput.classList.add('is-invalid');
        this._loginButton.classList.remove('is-visible');
    }

    private roomResponse(data:IRoomCreationResponse):void{
        console.log(`Server responded with the room token ${ data.token }`);
    }

    private handleSubmit:EventListener = (e:Event)=>{
        e.preventDefault();

        if(this._tokenInput.value !== ''){
            Env.startLoading();
            SocketManager.emit('joinRoom', { token: this._tokenInput.value });
        }else{
            this.handleError();
        }
    }

    private handleInput:EventListener = ()=>{
        if(this._tokenInput.value !== ''){
            this._loginButton.classList.add('is-visible');
        }else{
            this._loginButton.classList.remove('is-visible');
        }
    }

    private createNewRoom:EventListener = (e:Event)=>{
        e.preventDefault();
        if(SocketManager.emit('createRoom')){
            SocketManager.recieve('roomCreated', this.roomResponse);
        }
    }

    afterMount(){
        this._loginForm.addEventListener('submit', this.handleSubmit);
        this._tokenInput.addEventListener('blur', this.handleInput);
        this._tokenInput.addEventListener('keyup', this.handleInput);
        this._createRoomButton.addEventListener('click', this.createNewRoom);
    }

    beforeDestroy(){

    }
}

// Adds module to the global Modules object
modules[Login.index] = Login;
if(Env.isDebug){
    console.log('%c[Module Manager] '+`%cmodule %c${ Login.index } %chas finished loading`,'color:#4882fd','color:#eee', 'color:#48eefd', 'color:#eee');
}
Application.mountModules();
