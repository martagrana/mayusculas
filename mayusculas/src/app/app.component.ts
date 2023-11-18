import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mayusculas';

  textoOriginalv1: string = 'hola';
  textoOriginalv2: string = 'hola';


  textoMayusculasv1: string = 'HOLA';

  convertirMayusculas1() {
    this.textoMayusculasv1 = this.textoOriginalv1.toUpperCase()
  }





}
