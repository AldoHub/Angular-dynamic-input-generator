import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import {Linear} from "gsap";

//need in order to avoid compile errors
declare var TweenMax: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dynamicformgenerator'; 

constructor(private _fb: FormBuilder){}

  @ViewChild('girl') girl: ElementRef;


  public myForm: FormGroup;
/*
  initlanguage() {
    //returns the form group to add
    console.log("init")
    return this._fb.group({
    Angular2: [''],
    React: ['']
    });  
  }
*/
initlanguage() {
  //returns the form group to add
  console.log("init form array fields");
  return this._fb.group({
    programmingLanguage: ["", Validators.required],
    programmingExp: ["", Validators.required],
  });  
}

  //add the field
  addProgrammingLanguage() {
    const control = <FormArray>this.myForm.controls['languages'];
    control.push(this.initlanguage());
  }

    removeLanguage(i: number) {
      const control = <FormArray>this.myForm.controls['languages'];
      control.removeAt(i);
      }

 
  
    save(model: any) {
      console.log(model);
      }

      doIt(): void {
       
        TweenMax.fromTo(this.girl.nativeElement, 2, {y: 40}, {y: -40, ease: Linear.easeOut, repeat:-1, yoyo: true});
      }
    

ngOnInit() {
  this.doIt();


  //init the form
  //with the default values
  this.myForm = this._fb.group({
    FirstName: ["", Validators.required],
    LastName: ["", Validators.required],
   
    //array
    languages: this._fb.array([
    this.initlanguage(),
    ])
    });

  
  }
}




