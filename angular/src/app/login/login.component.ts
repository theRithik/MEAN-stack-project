import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonServiceService } from '../service/common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  wrongPass:any
  constructor(private _service:CommonServiceService, private _route:Router){}
  ngOnInit(): void {
    
  }

  displayStyle = "none";
  
  openPopup() {
  this.displayStyle="block"
  }

  ///login
  onSubmit(form:NgForm){
    console.log(form)
  const register= form.controls['register'].value
  const password = form.controls['password'].value
  console.log(register)
  if(!form.valid){
    console.log("invalid")
  }
else{
  this._service.studentLogin(register,password).subscribe((val)=>{
    if(!val){
      console.info("wrong")
  
    }
    else{
      console.log("val")
    }
  },(err)=>{
    
    this.wrongPass=err.error.text
  },
  ()=>{
    this.wrongPass=''
 console.log("successfully")
 this._route.navigate([`student/login/${register}`])

  })
}
  }



  changeSubmit(form:NgForm){
    console.log(form)
const register = form.controls['register'].value
const password = form.controls['password'].value
const confirm = form.controls['confirm'].value
if(password!=confirm && password.length<1){
  this.wrongPass="password Does not match"
}
else{
  this.wrongPass=""
  this._service.passChange(register,password).subscribe((val)=>{
    console.log('val')
  },
  (err)=>{
    console.log(err)
    alert(err.error.text)
  },
  ()=>{
    alert("password successfully changed")
  })
}
  }

}
