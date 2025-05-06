import { Component, OnInit } from '@angular/core';
import { ServicioService, Servicio } from '../../services/servicio.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-servicios',
  imports: [CommonModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  servicios: Servicio[] = [];

  constructor(private servicioService: ServicioService) {}

  ngOnInit(): void {
    this.servicioService.getServicios().subscribe({
      next: (data: Servicio[]) => this.servicios = data,
      error: (err: any) => console.error('Error al obtener servicios:', err)
    });
  }
}
