import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  arr : any[] = [];
  feedbackid = "";

 feedback: string ="";

  constructor(private http: HttpClient )
  {
    this.getFbk();
  }

  getFbk()
  {
    this.http.get("http://localhost:9000/feedback/getAll")
    .subscribe((result: any)=>
    {
        console.log(result);
        this.arr = result.data;
    });
  }

  set(dta: any)
  {
    this.feedback = dta.feedback;

    this.feedbackid = dta._id;
  }

  sendfd()
  {
    if(this.feedbackid == '')
    {
        this.fdfn();
    }
  }

 fdfn()
  {
    let send =
    {
      "feedback" : this.feedback,
    };
    this.http.post("http://localhost:9000/feedback/create",send).subscribe((resData: any)=>
    {
        console.log(resData);
        alert("Thank you..!")
        this.feedback = '';
        this.getFbk();
    });
}
}