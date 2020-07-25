import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practica-maquetado';
  nombre:string = 'Cualquier cosa'

  activo:boolean = true  
  activar(){
    this.activo = !this.activo
  }
}
