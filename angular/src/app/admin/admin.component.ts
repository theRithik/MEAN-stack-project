import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonServiceService } from '../service/common-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  error:any
constructor(private _service:CommonServiceService,private _route:Router){}
  ngOnInit(): void {
    
  }
onSubmit(form:NgForm){
console.log(form)
if(!form.valid){
  console.log("invalid")
}
else{
  const email = form.controls['email'].value
  const password = form.controls['password'].value
  this._service.login(email,password).subscribe((val)=>{
  if(!val){
    console.info("wrong")

  }
  else{
    console.log("done")
  }
  },
  (err)=>{
    console.error(err.error.text)
    this.error=err.error.text
  },
  ()=>{
    console.info("completd")
    this._route.navigate(['admin/frontPage'])
  })
}

}

}
