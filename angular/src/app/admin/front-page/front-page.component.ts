import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonServiceService } from 'src/app/service/common-service.service';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrls: ['./front-page.component.css']
})

export class FrontPageComponent implements OnInit {
min:any;
register:any;
notifications:any
notifText:any
changeFac:any
  constructor(private _service:CommonServiceService){}
  ngOnInit(): void {
  }
  
///////Adding Students
  onAdd(form:NgForm){
    const register =this.register
    const name = form.controls['studentName'].value
    if(register.length<5){
      console.log("minimum 6 numbers")
     this.min="minimum 6 numbers are required"
    }
    else{
      this.min=""  
  this._service.addStudent(register,name).subscribe((val)=>{
    if(!val){
      console.log("wrong")
    }
    else{
      console.log("done")
    }
  },
  (err)=>{
    alert(err.error.text)
  },
  ()=>{
    alert("student added successfully")
    form.reset()
  }
  )
  }
}

/////send Notifications
onSend(){
  const Notification = this.notifications

  if(Notification==null){
   this.notifText="please enter some text"
  }
  else{
    this.notifText=""
  this._service.sendNotification(Notification).subscribe((val)=>{
    if(!val){
      console.log("wrong")
    }
    else{
      console.log("done")
    }
  },
  (err)=>{
    alert(err.error.text)
  },
  ()=>{
    alert("Notifaction send successfuly")
    Notification.reset()
  })
}
}
////exam passes

passSubmit(form:NgForm){
  const exampass= form.controls['exampass'].value

  this._service.examPass(exampass).subscribe((val)=>{
    console.log(val)
  },
  (err)=>{
    alert(err.error.text)
  },
  ()=>{
    alert("exam pass sent successfully")
  })
}

onChange(){
const faculity = this.changeFac
this._service.faculity(faculity).subscribe((val)=>{
  console.log('done')
},(err)=>{
  alert(err.error.text)
},
()=>{
  alert("successfully Added the data")
})
}
onAdmin(form:NgForm){
  console.log(form)
  const email = form.controls['email'].value
  const name = form.controls['name'].value
  const phone = form.controls['phone'].value
  const password = form.controls['password'].value
  this._service.addAdmin(email,name,phone,password).subscribe((val)=>{
    console.log("done")
  },(err)=>{
    alert(err.error.text)
  },
  ()=>{
    alert("Admin successfully added")
    form.reset()
  })
}
}
