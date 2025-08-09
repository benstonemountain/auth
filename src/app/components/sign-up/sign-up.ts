import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.css'
})
export class SignUp {

  private formBuilder = inject(FormBuilder);

  signUpForm = this.formBuilder.group({
    username: ["", [Validators.required]],
    password: ["", [Validators.required]],
  })

  onSignUp() {
    const username = this.signUpForm.controls.username.value;
    const password = this.signUpForm.controls.password.value;

    if(username && password) {
      console.log(username);
      console.log(password);
      
    }
  }

}
