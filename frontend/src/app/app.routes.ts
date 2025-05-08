import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { RolSelectorComponent } from './pages/rol-selector/rol-selector.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },

  // Login: primero el selector, luego el login real
  { 
    path: 'login', 
    component: RolSelectorComponent, 
    data: { mode: 'login' } 
  },
  { 
    path: 'login/:rol', 
    component: LoginComponent 
  },

  // Register: selector + register real
  { 
    path: 'register', 
    component: RolSelectorComponent, 
    data: { mode: 'register' } 
  },
  { 
    path: 'register/:rol', 
    component: RegisterComponent 
  },

  { path: '**', redirectTo: '' }
];
