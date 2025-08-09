import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

    private formBuilder = inject(FormBuilder);

  loginForm = this.formBuilder.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
  })

  onLogin() {
    const username = this.loginForm.controls.username.value;
    const password = this.loginForm.controls.password.value;

    if(username && password) {
      console.log(username);
      console.log(password);
      
    }
  }

}
