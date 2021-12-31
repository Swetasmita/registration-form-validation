import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-reactive-form';
  registerForm:any; //Form Name
  submitted = false;

ngOnInit(){
  this.registerForm = new FormGroup({
    "firstName": new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z]*')]),
    "lastName": new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*')]),
    "emailId": new FormControl('',[Validators.required,Validators.email]),
    "mobileNumber": new FormControl('',[Validators.required,Validators.pattern('[0-9]*')]),
    "password": new FormControl('', [Validators.required, Validators.minLength(6)])
  });

}
//onSubmit Method
submit(){
  console.log(this.registerForm.value);
}

//get FirstName
get firstname(){
  return this.registerForm.get('firstName');
  }
  //get LastName
  get lastname(){
    return this.registerForm.get('lastName');
  }
 //get email id
 get emailid(){
  return this.registerForm.get('emailId');
}
 //get mobileNumber
 get mobile(){
  return this.registerForm.get('mobileNumber');
}
 //get password
 get pswd(){
  return this.registerForm.get('password');
}
onReset() {
  this.submitted = false;
  this.registerForm.reset();
}
}
