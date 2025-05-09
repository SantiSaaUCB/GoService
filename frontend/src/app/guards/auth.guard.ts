import { inject, Injectable } from '@angular/core'
import {
  CanActivate,
  Router
} from '@angular/router'
import { ApiService } from '../services/api.service'
import { catchError, map, of } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private api    = inject(ApiService)
  private router = inject(Router)

  canActivate() {
    return this.api.getProfile().pipe(
      map(() => true),
      catchError(() => {
        this.router.navigate(['/login'])
        return of(false)
      })
    )
  }
}