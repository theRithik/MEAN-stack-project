import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonServiceService } from 'src/app/service/common-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit{
  hello:any;
  details:any;
  notifications:any
  exampasss:any
  faculty:any
constructor(private _service:CommonServiceService, private _route:ActivatedRoute){}
  ngOnInit(): void {
   this.hello= this._route.snapshot.paramMap.get('id')
const register = this.hello
////student details
   this._service.getDetails(register).subscribe((val)=>{
    this.details=val;

   },(err)=>{
    console.log(err)
   },()=>{
    console.log('completed')
   })

   ////////////notifications
   this._service.getNotifications().subscribe((val)=>{
    console.log(val)
    this.notifications= val
    console.log(this.notifications)
   },(err)=>{
    console.log(err)
   },()=>{
    console.log("completed")
   })

   /////examPasses
   this._service.examPasses().subscribe((val)=>{
    this.exampasss=val
   },(err)=>{
    console.log(err)
   },()=>{
    console.log('completed')
   })


   this._service.changefaculity().subscribe((val)=>{
    this.faculty=val
    console.log(this.faculty[0].faculity)
   },(err)=>{
    console.log(err)
   },()=>{
    console.log("completed4")
   })
  }

  addDetails(){
    const name = ((document.getElementById('first')  as HTMLInputElement).value)
    const phone = ((document.getElementById('secound') as HTMLInputElement).value)
    const email = ((document.getElementById('third') as HTMLInputElement).value)
    const register = this.details.register
    console.log(register)
    this._service.frontDetails(register,name,email,phone).subscribe((val)=>{
      console.log(val)
    },(err)=>{
      console.log(err)
    },()=>{
      console.log("completed")
      alert('details changed Successfully')
    })
  }
}
