import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule],
})
export class LoginComponent {
  error = '';

  constructor(private router: Router) {}

  onSubmit(email: string, password: string): void {
    if (!email || !password) {
      this.error = 'Por favor complete ambos campos.';
    } else {
      this.error = '';
      this.router.navigate(['/']);
    }
  }
}
