import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {
  offArray : any[] = [];

  constructor(private http: HttpClient )
  {
    this.getoffDetails();
  }

  getoffDetails()
  {
    this.http.get("http://localhost:9000/offer/getAll")
    .subscribe((res: any)=>
    {
        console.log(res);
        this.offArray = res.data;
    });
  }

}
