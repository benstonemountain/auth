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
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
  })

  onSignUp() {
    const email = this.signUpForm.controls.email.value;
    const password = this.signUpForm.controls.password.value;

    if(email && password) {
      console.log(email);
      console.log(password);
      
    }
  }

}
