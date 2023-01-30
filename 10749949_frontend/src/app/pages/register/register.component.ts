import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  arry : any[] = [];
  stid = "";

  name: string ="";
  nic: string ="";
  address: string ="";
  email: String ="";
  phone: string ="";
  username: string ="";
  password: string ="";

  constructor(private http: HttpClient, private roter:Router )
  {
    this.get();
  }

  get()
  {
    this.http.get("http://localhost:9000/user/getAll")
    .subscribe((result: any)=>
    {
        console.log(result);
        this.arry = result.data;
    });
  }

  setUp(dt: any)
  {
    this.name = dt.name;
    this.nic = dt.nic;
    this.address = dt.address;
    this.email = dt.email;
    this.phone = dt.phone;
    this.username = dt.username;
    this.password = dt.password;

    this.stid = dt._id;
  }

  register()
  {
    if(this.stid == '')
    {
        this.registerfn();
    }
  }

  registerfn()
  {
    //this.roter.navigate(['/login']);
    let bt =
    {
      "name" : this.name,
      "nic" : this.nic,
      "address" : this.address,
      "email" : this.email,
      "phone" : this.phone,
      "username" : this.username,
      "password" : this.password
    };
    this.http.post("http://localhost:9000/user/create",bt).subscribe((res: any)=>
    {
        console.log(res);
        alert("Registration Successful");
        this.roter.navigate(['/login']);
        this.name = '';
        this.nic = '';
        this.address = '';
        this.email = '';
        this.phone  = '';
        this.username  = '';
        this.password  = '';
        this.get();

    });

  }
};
