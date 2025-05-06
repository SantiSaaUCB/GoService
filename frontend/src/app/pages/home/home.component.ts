import { Component } from '@angular/core';
import { ServiciosComponent } from '../servicios/servicios.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HeaderComponent, ServiciosComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {}
