import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent {

  constructor(private router: Router) {

  }

  appo(){
    this.router.navigate(['showserve']);
    }
    regi(){
      this.router.navigate(['showregister']);
    }
    feedb(){
      this.router.navigate(['showfeedback']);
    }
    offer(){
      this.router.navigate(['addoffer']);
    }
  }

