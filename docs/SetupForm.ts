import { Module } from 'Module';
import { Application } from 'Application';
import { Env } from 'Env';
import { InputManager } from 'InputManager';

export class SetupForm extends Module{
    public static index:string = 'SetupForm';

    private _steps:Array<HTMLElement>;
    private _currentStepIndex:number;

    private _nextButtons:Array<HTMLButtonElement>;

    constructor(view:HTMLElement, uuid:string){
        super(view, uuid);
        if(Env.isDebug){
            console.log('%c[Module Manager] '+`%ccreated new %c${ SetupForm.index } %cmodule with an ID of %c${ uuid }`,'color:#4882fd','color:#eee','color:#48eefd','color:#eee','color:#48eefd');
        }

        this._steps = Array.from(this.view.querySelectorAll('form-step'));
        this._currentStepIndex = 0;

        this._nextButtons = Array.from(this.view.querySelectorAll('.js-next'));
    }

    private updateViewHeight(extraHeight:number = 0):void{
        const newHeight = this._steps[this._currentStepIndex].scrollHeight;
        this.view.style.height = `${ newHeight + extraHeight }px`;
    }

    private nextStep:EventListener = ()=>{
        const inputs:Array<HTMLInputElement> = Array.from(this._steps[this._currentStepIndex].querySelectorAll('.js-input'));

        let hasBlankInput = false;
        inputs.forEach((input)=>{
            if(input.value === ''){
                const errorEl = input.parentElement.querySelector('.js-error');
                InputManager.validateInput(input, errorEl);
                hasBlankInput = true;
            }
        });

        if(hasBlankInput){
            this.updateViewHeight(32); 
            return;
        }

        this._steps[this._currentStepIndex].classList.remove('is-visible');
        this._currentStepIndex++;
        this._steps[this._currentStepIndex].classList.add('is-visible');
        this.updateViewHeight();
    }

    afterMount(){
        this._steps[this._currentStepIndex].classList.add('is-visible');
        this.updateViewHeight();

        for(let i = 0; i < this._nextButtons.length; i++){
            this._nextButtons[i].addEventListener('click', this.nextStep);
        }
    }

    beforeDestroy(){

    }
}

// Adds module to the global Modules object
modules[SetupForm.index] = SetupForm;
if(Env.isDebug){
    console.log('%c[Module Manager] '+`%cmodule %c${ SetupForm.index } %chas finished loading`,'color:#4882fd','color:#eee', 'color:#48eefd', 'color:#eee');
}
Application.mountModules();
