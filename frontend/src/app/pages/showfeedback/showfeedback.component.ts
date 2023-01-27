import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showfeedback',
  templateUrl: './showfeedback.component.html',
  styleUrls: ['./showfeedback.component.css']
})
export class ShowfeedbackComponent {

  fdArray : any[] = [];
  feedback: string ="";

  constructor(private http: HttpClient )
  {
    this.getfeedback();
  }

  getfeedback()
  {
    this.http.get("http://localhost:9000/feedback/getAll")
    .subscribe((res: any)=>
    {

        console.log(res);
        this.fdArray = res.data;
    });
  }

  deletefn(deleted: any)
  {
    this.http.delete("http://localhost:9000/feedback/delete"+ "/"+ deleted._id).subscribe((res: any)=>
    {
        console.log(res);
        alert("Field Deleted Successfully..!")
        this.getfeedback();

    });
  }
}