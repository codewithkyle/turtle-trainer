import { Module } from 'Module';
import { Application } from 'Application';
import { Env } from 'Env';
import { SocketManager } from './SocketManager';
import { Client } from './Client';

interface IRoomCreationResponse{
    token: string;
}

interface IRoomJoinResponse{
    token?: string;
    success: boolean;
    error?: string;
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

    /**
     * Fetches, modifies, and appends the startup form.
     * @param firstUser - a `boolean` stating if the user is the first user in the room
     */
    private GetStartupForm(firstUser:boolean):void{
        Env.startLoading();
        
        const formSlug = (firstUser) ? 'creation-form' : 'startup-form';

        fetch(`${ window.location.origin }/${ formSlug }.html`)
        .then(request => request.text())
        .then(response => {
            Env.stopLoading();
            const startupFormWrapper = document.createElement('div');
            startupFormWrapper.classList.add('o-setup-form');
            startupFormWrapper.innerHTML = response;

            const main = document.body.querySelector('.js-main-view');
            main.appendChild(startupFormWrapper);
            startupFormWrapper.classList.add('is-visible');
        })
        .catch(e => { console.error('Something went wrong:', e) });
    }

    private roomCreationResponse(data:IRoomCreationResponse, scope:Login):void{
        Env.stopLoading();
        if(Env.isDebug){
            console.log(`Server responded with the room token ${ data.token }`);
        }
        new Client(data.token);
        scope.view.classList.add('is-hidden');
        scope.GetStartupForm(true);
    }

    private roomJoinResponse(data:IRoomJoinResponse, scope:Login):void{
        Env.stopLoading();
        if(data.success && data.token){
            new Client(data.token);
            scope.view.classList.add('is-hidden');
            scope.GetStartupForm(false);
        }else{
            if(data.error){
                if(Env.isDebug){
                    console.error('Server responded with:', data.error);
                }
            }
        }
    }

    private handleSubmit:EventListener = (e:Event)=>{
        e.preventDefault();

        if(this._tokenInput.value !== ''){
            Env.startLoading();
            SocketManager.emit('joinRoom', { token: this._tokenInput.value });
            SocketManager.receive('roomResponse', this.roomJoinResponse, this);
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
        Env.startLoading();
        if(SocketManager.emit('createRoom')){
            SocketManager.receive('roomCreated', this.roomCreationResponse, this);
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
