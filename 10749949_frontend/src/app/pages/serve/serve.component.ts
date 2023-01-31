import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css']
})
export class ServeComponent {
  Array : any[] = [];
bID = "";

username: string ="";
phone: string ="";
service: string ="";
persons: string = "";
date: string ="";


constructor(private http: HttpClient )
{
  this.get();
}

get()
{
  this.http.get("http://localhost:9000/service/getAll")
  .subscribe((result: any)=>
  {
      console.log(result);
      this.Array = result.data;
  });
}

setUp(data: any)
{
  this.username = data.username;
  this.phone = data.phone;
  this.service = data.service;
  this.persons = data.persons;
  this.date = data.date;


  this.bID = data._id;
}

save()
{
  if(this.bID == '')
  {
      this.addfn();
  }
}

addfn()
{
  let bData =
  {
    "username" : this.username,
    "phone" : this.phone,
    "service" : this.service,
    "persons" : this.persons,
    "date" : this.date,

  };
  this.http.post("http://localhost:9000/service/create",bData).subscribe((resData: any)=>
  {
      console.log(resData);
      alert("Boooking Added...!")
      this.username = '';
      this.phone = '';
      this.service = '';
      this.persons = '';
      this.date  = '';

      this.get();


  });

}

}
