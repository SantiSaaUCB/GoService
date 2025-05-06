// src/app/services/servicio.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Servicio {
  titulo: string;
  descripcion: string;
  categoria: string;
  ubicacion: string;
  _id?: string;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  private API_URL = 'https://goservice-covi.onrender.com/api/servicios';

  constructor(private http: HttpClient) {}

  getServicios(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(this.API_URL);
  }
}
