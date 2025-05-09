import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

interface PerfilResponse {
  usuario: { id: string; correo: string; rol: string }
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseUrl = 'http://localhost:8088/api'

  constructor(private http: HttpClient) {}

  // ... tus métodos login(), logout(), getServicios(), etc.

  getProfile(): Observable<PerfilResponse> {
    return this.http.get<PerfilResponse>(
      `${this.baseUrl}/auth/me`,
      { withCredentials: true }
    )
  }
}