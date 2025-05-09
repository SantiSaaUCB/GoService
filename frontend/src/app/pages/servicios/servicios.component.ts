import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import { ServicioService } from '../../services/servicio.service'

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  servicios: any[] = []
  loading = true
  errorMsg = ''

  constructor(private servicioService: ServicioService) {}

  ngOnInit(): void {
    this.servicioService.getServicios().subscribe({
      next: data => {
        this.servicios = data.map(s => ({
          ...s,
          icono: this.calcIcon(s.categoria)
        }))
        this.loading = false
      },
      error: err => {
        console.error(err)
        this.errorMsg = err.message || 'Error al cargar servicios'
        this.loading = false
      }
    })
  }

  private calcIcon(categoria: string|null|undefined): string {
    const key = (categoria ?? '').toLowerCase()
    if (key.includes('mascota'))       return '/assets/icons/icono-cuidado-de-mascotas-blanco.png'
    if (key.includes('niño') || key.includes('nino')) return '/assets/icons/icono-cuidado-de-niños-blanco.png'
    if (key.includes('adulto'))        return '/assets/icons/icono-cuidado-de-adultos-blanco.png'
    return '/assets/icons/icono-goservice-blanco.png'
  }

  getIcon(servicio: any): string {
    return servicio.icono
  }
}
