import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { ServicioDetailComponent } from './pages/servicio-detail/servicio-detail.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'servicios', component: ServiciosComponent, canActivate: [AuthGuard] },
  { path: 'servicio/:id', component: ServicioDetailComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];
