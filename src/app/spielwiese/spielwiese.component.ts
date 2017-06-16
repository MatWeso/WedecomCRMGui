import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UsernameInputComponent } from "app/spielwiese/username-input.component";


@Component({
    selector: '<spielwiese></spielwiese>',
    template: 
    `<h1>Spielwiese</h1>
     <form #form="ngForm" (ngSubmit)="submit(form)">
            <div ngModelGroup="data1">
                <username></username>
            </div>
            <button type="submit">Submit</button>
     </form>
    
            `
})
export class SpielwieseComponent implements OnInit{

    //form: FormGroup;
    //username = "test";

    constructor(private fb: FormBuilder){

    // this.form = this.fb.group({
    //         // data1 : this.fb.group({
    //         //     username: [this.username, Validators.compose([Validators.required, Validators.minLength(3)])],
    //         //     password: [""],                
    //         // }),
    //         // adresses : this.fb.group({
    //         //     address: [""]         
    //         // })
    // });

        // console.log(this.form);
    }

    ngOnInit(): void {
        //this.form.controls['data1'].valueChanges.subscribe(data => this.onValueChanged(data));
        //console.log(this.form.get('data1.username'));
        //.get['username'].statusChanges.distinctUntilChanged().subscribe(data => this.onStatusChanged(data));
    }    

    onValueChanged(data){
        console.log("Data changed");
        console.log(data);
        //console.log(this.form);
    }

    onStatusChanged(data){
        console.log("Status changed");
        console.log(data);
        //console.log(this.form);
    }    

    submit(form){
        console.log(form);
    }

}