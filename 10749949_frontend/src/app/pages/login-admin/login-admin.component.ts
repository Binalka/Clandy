import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  password: string = '';

  constructor(private router: Router) {

   }

  log()
  {














    if (this.password === 'clandy') {
      this.router.navigate(['homeAdmin']);
    } else {
      alert('Incorrect password');
    }
  }

}
