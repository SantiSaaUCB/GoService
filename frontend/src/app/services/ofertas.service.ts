import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OfertasService {
  private API_URL = 'http://localhost:5000/api/ofertas';

  constructor(private http: HttpClient) {}

  crearOferta(oferta: any): Observable<any> {
    return this.http.post(this.API_URL, oferta);
  }

  obtenerPorCategoria(categoria: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/categoria/${categoria}`);
  }
}
