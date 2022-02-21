import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public isLoginFailed = false;
  public errorMessage = '';

  public constructor(
    private router: Router
  ) {}

  public ngOnInit(): void {
  }

  public onSubmit(): void {
    const { email, password } = this.loginForm.value;
  }
}
