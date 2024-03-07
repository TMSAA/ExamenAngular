import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent {
 texto: String = 'Hola¿Que tal estas?';
 
 cambiarTexto(){
  this.texto = 'bienvenido de nuevo';
 }
}
