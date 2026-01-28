import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {CommonModule} from '@angular/common';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {
  email = '';
  password = '';
  loading = false;
  errorMessage = '';
  data = {
    email: '',
    password: '',
  }

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.loading = true;
    this.data = {
      email: this.email,
      password: this.password
    }
    this.authService.login(this.data)
      .subscribe({
        next: (res: any) => {
          // ✅ 1. Store token
          localStorage.setItem('auth_token', res.token);

          // ✅ 2. Mark logged in
          this.loading = false;

          // ✅ 3. Redirect
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          this.loading = false;
          this.errorMessage = err?.error?.message ?? 'Login failed';
        }
      })

    // simulate API call
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
