import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showregister',
  templateUrl: './showregister.component.html',
  styleUrls: ['./showregister.component.css']
})
export class ShowregisterComponent {

    userarry : any[] = [];
  s = "";

  name: string ="";
  nic: string ="";
  address: string ="";
  email: string = "";
  phone: string ="";
  username: string="";

  constructor(private http: HttpClient )
  {
    this.get();
  }

  get()
  {
    this.http.get("http://localhost:9000/user/getAll")
    .subscribe((res: any)=>
    {

        console.log(res);
        this.userarry = res.data;
    });
  }

  Del(deldata: any)
  {
    this.http.delete("http://localhost:9000/user/delete"+ "/"+ deldata._id).subscribe((res: any)=>
    {
        console.log(res);
        alert("Field Deleted Successfully")
        this.get();

    });
  }
}