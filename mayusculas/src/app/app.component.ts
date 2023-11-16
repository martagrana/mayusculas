import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mayusculas';

  textoOriginal: string = 'hola';
  textoMayusculas: string = 'HOLA';

  convertirmayusculas() {
    this.textoOriginal.toUpperCase
  }




}
