import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addoffer',
  templateUrl: './addoffer.component.html',
  styleUrls: ['./addoffer.component.css']
})
export class AddofferComponent {

  offArray : any[] = [];
  offid = "";  
  offer: string ="";
  discount: string ="";

  constructor(private http: HttpClient )
  {
    this.getOfferDetails();
  }

  getOfferDetails()
  {
    this.http.get("http://localhost:9000/offer/getAll")
    .subscribe((result: any)=>
    {
        console.log(result);
        this.offArray = result.data;
    });
  }

  setEdit(data: any)
  {
    
    this.offer = data.offer;
    this.discount = data.discount;

    this.offid = data._id;
  }

  editfn(data: any){
    let body =
  {
    "offer" : this.offer,
    "discount" : this.discount,
  };
  this.http.patch("http://localhost:9000/offer/update"+ "/"+this.offid,body).subscribe((resdt: any)=>
  {
      console.log(resdt);
      alert("Updated")
      this.getOfferDetails();
  });

  }

  addf()
  {
    if(this.offid == '')
    {
        this.addfunction();
    }
  }

  addfunction()
  {
    let bDt =
    {
      "offer" : this.offer,
      "discount" : this.discount,
    };
    this.http.post("http://localhost:9000/offer/create",bDt).subscribe((restDt: any)=>
    {
        console.log(restDt);
        alert("Added...!")
        this.offer = '';
        this.discount = '';
        this.getOfferDetails();
    });
  }

  deletefn(data: any){
      this.http.delete("http://localhost:9000/offer/delete"+ "/"+ data._id).subscribe((restDta: any)=>
    {
        console.log(restDta);
        alert("deleted..!")
        this.getOfferDetails();

    });
    };

}
