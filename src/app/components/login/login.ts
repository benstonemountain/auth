import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth-service';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

    private formBuilder = inject(FormBuilder);
    private authService = inject(AuthService);
    private router = inject(Router);

  loginForm = this.formBuilder.group({
    email: ["", [Validators.required]],
    password: ["", [Validators.required]],
  })

  onLogin() {
    const email = this.loginForm.controls.email.value;
    const password = this.loginForm.controls.password.value;

  if (email && password) {
    this.authService.login(email, password).subscribe({
      next: () => this.router.navigate(['/landing-page']),
      error: (err) => console.error(err),
    });
  }
  }

}
