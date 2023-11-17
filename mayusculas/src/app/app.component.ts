import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mayusculas';

  textoOriginal1: string = 'hola';
  textoOriginal2: string = 'hola';
  textoMayusculas: string = 'HOLA';

  convertirmayusculas1() {
    this.textoOriginal1.toUpperCase
  }
  convertirmayusculas2() {
    this.textoOriginal2.toUpperCase
  }




}
