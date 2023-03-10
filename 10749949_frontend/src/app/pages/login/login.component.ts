import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginFrom!: FormGroup

  constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit() {
      this.loginFrom = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      })
  }

  loginHandler() {
      this.http.post<any>('http://localhost:9000/user/login', this.loginFrom.value).subscribe({
        next: value => {
            this.router.navigate(["/home"])
        },
        error: error => {
          alert("Enter Correct username and password");
        }
      })
  }

  get username() {
    return this.loginFrom.get('username')
  }

  get password() {
    return this.loginFrom.get('password')
  }

}

