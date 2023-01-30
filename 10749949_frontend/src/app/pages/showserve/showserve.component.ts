import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showserve',
  templateUrl: './showserve.component.html',
  styleUrls: ['./showserve.component.css']
})
export class ShowserveComponent {

  userarry : any[] = [];
  s = "";

  username: string="";
  phone: string ="";
  service: string ="";
  date: string ="";
  persons: string ="";

  constructor(private http: HttpClient )
  {
    this.get();
  }

  get()
  {
    this.http.get("http://localhost:9000/service/getAll")
    .subscribe((res: any)=>
    {

        console.log(res);
        this.userarry = res.data;
    });
  }

  Del(deldata: any)
  {
    this.http.delete("http://localhost:9000/service/delete"+ "/"+ deldata._id).subscribe((res: any)=>
    {
        console.log(res);
        alert("Field Deleted Successfully")
        this.get();

    });
  }

}
