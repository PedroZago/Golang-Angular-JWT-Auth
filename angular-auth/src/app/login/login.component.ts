import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null)
  })

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  get email(): any {
    return this.loginForm.get('email');
  }

  get senha(): any {
    return this.loginForm.get('senha');
  }

  submit(): void {
    this.http.post('http://localhost:8000/api/login', this.loginForm.getRawValue(), { withCredentials: true })
      .subscribe(() => this.router.navigate(['/']));
  }

}
