import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {
  horas: number = 0;
  minutos: number = 0;
  segundos: number = 0;
  intervalo: number = 0;
  contado: boolean = false;
  timer : any;
  cronometroIniciado: boolean = false;
  tiempoInicio: number = 0;
  lapsos: number[] = [];
  

  
  start() {
    this.timer = setInterval(() => {
      this.segundos++;
        if(this.segundos == 60){
          this.minutos++;
          this.segundos = 0;
          if (this.minutos == 60) {
            this.horas++;
            this.minutos = 0;
            this.segundos = 0;
          }
        }
    }, 1000);
  }
  stop() {
    clearInterval(this.timer);
  }

  record(){
    this.contado = true;
      this.timer = setInterval(() =>{
        this.intervalo++;
      },100);
  }

  estacontado(){
    if (this.contado = false) {
      return this.segundos;
    } else {
      return this.intervalo;
    }
  }

}
