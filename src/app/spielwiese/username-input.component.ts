import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input, HostBinding } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators, ControlValueAccessor} from "@angular/forms";


@Component({
    selector: '<username></username>',
    template: `<input type="text" (change)='onChange()' (input)='onInput()' [(ngModel)]="username"/>'`
})
export class UsernameInputComponent extends FormControl implements OnInit{
    
    @HostBinding('style.color') color: string = 'red';
    //@HostBinding('class.valid') get valid() { return this.control.valid; }

    username ="bbb";

    constructor(){
        super(null , null );
    }

    ngOnInit(): void {
            this.initValidators();
    }

    initValidators(){
        console.log("init validators");
        this.setValidators(Validators.compose([Validators.required, Validators.minLength(3)]));
    }

    onChange(){
        console.log("onChange");
    }

    onInput(){
        console.log("on input");
        //this.updateValueAndValidity({onlySelf : true, emitEvent: true      });  
        console.log(this.errors);
        console.log(this);
    }

}