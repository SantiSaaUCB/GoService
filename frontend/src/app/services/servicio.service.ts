import { Injectable, inject } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class ServicioService {
  private http = inject(HttpClient)
  private baseUrl = 'http://localhost:8088/api'

  getServicios(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/servicios`)
  }

  getServicio(id: number | string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/servicios/${id}`)
  }
}
