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
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
  })

  onLogin() {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;

    if(email && password) {
      console.log(email);
      console.log(password);
      
    }
  }

}
