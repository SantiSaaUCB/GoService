import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [CommonModule]
})
export class RegisterComponent {
  error = '';

  constructor(private router: Router) {}

  onSubmit(name: string, email: string, password: string): void {
    if (!name || !email || !password) {
      this.error = 'Todos los campos son obligatorios.';
    } else {
      this.error = '';
      // Simulación de registro exitoso
      this.router.navigate(['/']);
    }
  }
}
