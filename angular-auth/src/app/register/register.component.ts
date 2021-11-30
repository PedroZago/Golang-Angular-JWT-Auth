import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
    name: new FormControl(null),
  })

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  get email(): any {
    return this.registerForm.get('email');
  }

  get senha(): any {
    return this.registerForm.get('senha');
  }

  get name(): any {
    return this.registerForm.get('name');
  }

  submit(): void {
    this.http.post('http://localhost:8000/api/register', this.registerForm.getRawValue())
      .subscribe(() => this.router.navigate(['/login']));
  }

}
