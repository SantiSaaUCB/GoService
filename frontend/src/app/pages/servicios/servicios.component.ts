import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { RouterLink } from '@angular/router'
import { ServicioService } from '../../services/servicio.service'
import { OfertasService } from '../../services/ofertas.service'


@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.scss']
})
export class ServiciosComponent implements OnInit {
  ofertaForm: FormGroup;
  enviado = false;
  categorias: string[] = []
  keepOriginalOrder = () => 0; // desactiva el ordenamiento


  constructor(private fb: FormBuilder, private ofertasService: OfertasService, private servicioService: ServicioService) {
    this.ofertaForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      ci: ['', Validators.required],
      ubicacion: ['', Validators.required],
      telefono: ['', Validators.required],
      redesSociales: ['', Validators.required],
      experiencia: ['', Validators.required],
      precio: ['', Validators.required],
      otros: ['', Validators.required],
      categoria: ['', Validators.required]
    });

    this.servicioService.getServicios().subscribe((servicios) => {
      const todas = servicios.map(s => s.categoria)
      this.categorias = [...new Set(todas)] // categorías únicas
    })
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.enviado = true;

    if (this.ofertaForm.invalid) {
      return;
    }

    this.ofertasService.crearOferta(this.ofertaForm.value).subscribe({
      next: res => {
        alert('Oferta enviada con éxito');
        this.ofertaForm.reset();
        this.enviado = false;
      },
      error: err => {
        console.error('Error al enviar la oferta', err);
        alert('Error al enviar la oferta');
      }
    });
  }
}