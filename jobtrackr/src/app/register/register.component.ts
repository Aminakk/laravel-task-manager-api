import { Component } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';
  errorMessage = '';
  loading = false;
  data = {
    name: '',
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onSubmit() {
    this.loading = true;
    this.errorMessage = '';
    this.data = {
      name: this.name,
      email: this.email,
      password: this.password
    }
    this.authService.register(this.data).subscribe({
      next: (res) => {
        localStorage.setItem('auth_token', res.token);
        this.loading = false;
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Registration failed';
        this.loading = false;
      }
    });
  }
}
