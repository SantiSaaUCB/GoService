import { Component, OnInit } from '@angular/core';
import { ServicioService, Servicio } from '../../services/servicio.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-servicios',
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  servicios: Servicio[] = [];

  constructor(
    private servicioService: ServicioService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.servicioService.getServicios().subscribe({
      next: (data: Servicio[]) => this.servicios = data,
      error: (err: any) => console.error('Error al obtener servicios:', err)
    });
  }

  getIcon(categoria: string, variante: 'azul' | 'blanco' = 'blanco'): string {
    const file = categoria.toLowerCase().replace(/\s+/g, '-');
    return `assets/images/icono-${file}-${variante}.png`;
  }

  onBuscar(): void {
    this.router.navigate(['/login'], { queryParams: { rol: 'buscador' } });
  }

  onOfrecer(): void {
    this.router.navigate(['/login'], { queryParams: { rol: 'ofertante' } });
  }
}
