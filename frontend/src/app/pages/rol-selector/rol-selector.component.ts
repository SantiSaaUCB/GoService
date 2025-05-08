import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-rol-selector',
  imports: [CommonModule, RouterModule],
  templateUrl: './rol-selector.component.html',
  styleUrls: ['./rol-selector.component.scss']
})
export class RolSelectorComponent implements OnInit {
  mode: 'login' | 'register' = 'login';

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const data = this.route.snapshot.data as { mode?: string };
    this.mode = data.mode === 'register' ? 'register' : 'login';
  }

  irALogin(rol: 'buscador' | 'ofertante'): void {
    this.router.navigate(['/login', rol]);
  }

  irARegister(rol: 'buscador' | 'ofertante'): void {
    this.router.navigate(['/register', rol]);
  }
}
