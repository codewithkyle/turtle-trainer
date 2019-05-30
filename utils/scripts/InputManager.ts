export class InputManager {

    private static _inputs:Array<HTMLInputElement> = Array.from(document.body.querySelectorAll('.js-input'));
    private static _selects:Array<HTMLSelectElement> = Array.from(document.body.querySelectorAll('.js-select'));
    private static _textareas:Array<HTMLTextAreaElement> = Array.from(document.body.querySelectorAll('.js-textarea'));

    constructor(){
        InputManager.init();
    }

    private static handleInputBlur:EventListener = (e:Event)=>{
        const input = <HTMLInputElement>e.currentTarget;
        const wrapper = input.parentElement;
        const error = wrapper.querySelector('.js-error');
        InputManager.validateInput(input, error);
        input.classList.add('has-touched');
    }

    private static handleKeyup:EventListener = (e:Event)=>{
        const input = <HTMLInputElement>e.currentTarget;
        const wrapper = input.parentElement;
        const error = wrapper.querySelector('.js-error');

        if(input.classList.contains('has-touched')){
            InputManager.validateInput(input, error);
        }
    }

    private static handleInputFocus:EventListener = (e:Event)=>{
        const input = <HTMLInputElement>e.currentTarget;
        input.addEventListener('keyup', InputManager.handleKeyup);
    }

    private static handleSelectChange:EventListener = (e:Event)=>{
        const select = <HTMLSelectElement>e.currentTarget;
        const wrapper = select.parentElement;
        const error = wrapper.querySelector('.js-error');

        InputManager.validateSelect(select, error);
    }

    public static validateSelect(select:HTMLSelectElement, error:Element):boolean{
        /** Make sure the elements were provided */
        if(select === null || error === null){
            return true;
        }
        
        if(select.value !== ''){
            select.classList.add('has-value');
        }else{
            select.classList.remove('has-value');
        }

        if(!select.validity.valid){
            select.classList.add('is-invalid');

            const errorMessage = select.validationMessage;
            error.innerHTML = errorMessage;
            return false;
        }

        select.classList.remove('is-invalid');
        error.innerHTML = '';

        return true;
    }

    public static validateInput(input:HTMLInputElement, error:Element):boolean{
        /** Make sure the elements were provided */
        if(input === null || error === null){
            return true;
        }

        if(input.value !== ''){
            input.classList.add('has-value');
        }else{
            input.classList.remove('has-value');
        }

        if(!input.validity.valid){
            input.classList.add('is-invalid');

            let errorMessage = input.validationMessage;

            if(input.type === 'password'){
                errorMessage = 'Please provide a valid password';

                if(input.value.length < input.minLength){
                    errorMessage = 'Password is too short';
                }
                else if(input.value.length > input.maxLength){
                    errorMessage = 'Password is too long';
                }
            }
            else if(input.type === 'email'){
                errorMessage = 'Please provide a valid email';
            }

            error.innerHTML = errorMessage;

            return false;
        }
        
        input.classList.remove('is-invalid');
        error.innerHTML = '';

        return true;
    }

    public static init():void{
        InputManager._inputs.forEach((input)=>{
            input.addEventListener('blur', InputManager.handleInputBlur);
            input.addEventListener('focus', InputManager.handleInputFocus);
        });

        InputManager._selects.forEach((select)=>{
            select.addEventListener('change', InputManager.handleSelectChange);
            select.addEventListener('blur', InputManager.handleInputBlur);
        });

        InputManager._textareas.forEach((textarea)=>{
            textarea.addEventListener('focus', InputManager.handleInputFocus);
            textarea.addEventListener('blur', InputManager.handleInputBlur);
        });
    }

    /**
     * A public static class that can be called at any time to wrangle form inputs event listeners.
     */
    public static reload():void{
        InputManager._inputs.forEach((input)=>{
            input.removeEventListener('blur', InputManager.handleInputBlur);
            input.removeEventListener('focus', InputManager.handleInputFocus);
        });

        InputManager._selects.forEach((select)=>{
            select.removeEventListener('change', InputManager.handleSelectChange);
        });

        InputManager._textareas.forEach((textarea)=>{
            textarea.removeEventListener('focus', InputManager.handleInputFocus);
            textarea.removeEventListener('blur', InputManager.handleInputBlur);
        });

        InputManager._inputs = Array.from(document.body.querySelectorAll('.js-input'));
        InputManager._selects = Array.from(document.body.querySelectorAll('.js-select'));
        InputManager._textareas = Array.from(document.body.querySelectorAll('.js-textarea'));

        InputManager.init();
    }

    /**
     * Trigger a manual form validation.
     * @param form - the `HTMLFormElement` that needs to be validated
     */
    public static validateForm(form:HTMLFormElement):boolean{
        const inputs:Array<HTMLInputElement> = Array.from(form.querySelectorAll('.js-input'));
        const selects:Array<HTMLSelectElement> = Array.from(form.querySelectorAll('.js-select'));

        let isValid = true;

        /** Validate the forms input elements */
        for(let i = 0; i < inputs.length; i++){
            const errorEl = inputs[i].parentElement.querySelector('.js-error');

            if(errorEl){
                if(!this.validateInput(inputs[i], errorEl)){
                    isValid = false;
                }
            }
        }

        /** Validate the forms select elements */
        for(let i = 0; i < selects.length; i++){
            const errorEl = selects[i].parentElement.querySelector('.js-error');

            if(errorEl){
                if(!this.validateSelect(selects[i], errorEl)){
                    isValid = false;
                }
            }
        }

        return isValid;
    }
}

new InputManager();
