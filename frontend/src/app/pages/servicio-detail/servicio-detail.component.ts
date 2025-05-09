import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../services/ofertas.service';

@Component({
  selector: 'app-servicio-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './servicio-detail.component.html',
  styleUrls: ['./servicio-detail.component.scss']
})
export class ServicioDetailComponent implements OnInit {
  categoria: string = '';
  ofertas: any[] = [];
  loading = true;
  errorMsg = '';

  constructor(private route: ActivatedRoute, private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoriaParam = params.get('categoria');
      if (categoriaParam) {
        this.categoria = categoriaParam;
        this.getOfertasPorCategoria();
      }
    });
  }

  getOfertasPorCategoria(): void {
    this.loading = true;
    this.ofertasService.obtenerPorCategoria(this.categoria).subscribe({
      next: (data) => {
        this.ofertas = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.errorMsg = 'Error al cargar ofertas';
        this.loading = false;
      }
    });
  }
}
