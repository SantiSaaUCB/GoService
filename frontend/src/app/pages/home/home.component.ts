import { Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterLink, Router } from '@angular/router'
import { ServicioService } from '../../services/servicio.service'

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  servicios: any[] = []
  loading = true
  errorMsg = ''

  constructor(private servicioService: ServicioService, private router: Router) {}

  ngOnInit(): void {
    this.servicios = []
    this.loading = true
    this.errorMsg = ''
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

  navegarADetalle(categoria: string): void {
    this.router.navigate(['/servicio-dem', categoria]); // Navegar programáticamente
  }

  private calcIcon(categoria: string|null|undefined): string {
    const key = (categoria ?? '').toLowerCase()
    if (key.includes('mascota'))       return '/assets/icons/icono-cuidado-de-mascotas-blanco.png'
    if (key.includes('niño') || key.includes('nino')) return '/assets/icons/icono-cuidado-de-niños-blanco.png'
    if (key.includes('adulto'))        return '/assets/icons/icono-cuidado-de-adultos-blanco.png'
    if (key.includes('recados'))        return '/assets/icons/icono-recados-blanco.png'
    if (key.includes('casas'))        return '/assets/icons/icono-cuidado-de-casas-blanco.png'
    if (key.includes('otro'))        return '/assets/icons/icono-otro-blanco.png'
    return '/assets/icons/icono-goservice-blanco.png'
  }

  getIcon(servicio: any): string {
    return servicio.icono
  }
}
