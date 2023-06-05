import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


 
@Injectable({
  providedIn: 'root'
})
export class CommonServiceService implements OnInit{
  
  constructor(private _http:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
login(email:any,password:any){
  return this._http.post('http://localhost:5000/admin/login',{
    email:email,
    password:password
  })
}
addStudent(register:any,name:any){
  return this._http.post('http://localhost:5000/admin/addStudent',{
register:register,
name:name
  })
}

sendNotification(Notification:any){
return this._http.post('http://localhost:5000/admin/posting/notifications',{
  Notification:Notification

})
}

examPass(exampass:any){
  return this._http.post('http://localhost:5000/admin/posting/exampass',{
    exampass:exampass
  })

}
faculity(faculity:any){
  return this._http.post('http://localhost:5000/admin/posting/changeFaculty',{
facility:faculity
  })
}
addAdmin(email:any, name:any,phone:any,password:any){
  return this._http.post('http://localhost:5000/admin/register',{
    email:email,
    name:name,
    phone:phone,
    password:password
  })
}

studentLogin(register:any,password:any){
  return this._http.post('http://localhost:5000/student/studentLogin',{
 register:register,
 password:password,
  })
}

passChange(register:any,password:any){
  return this._http.put('http://localhost:5000/student/addPassword',{
register:register,
password:password,
  })
}

getDetails(register:any){
  return this._http.get(`http://localhost:5000/student/getDetails/${register}`,{

  })
}
frontDetails(register:any, name:any, email:any,phone:any){
  return this._http.put('http://localhost:5000/student/addDetails',{
    register:register,
    name:name,
    email:email,
    phone:phone
  })

}
getNotifications(){
  return this._http.get('http://localhost:5000/student/detailNotifications',{
    
  })
}
}
