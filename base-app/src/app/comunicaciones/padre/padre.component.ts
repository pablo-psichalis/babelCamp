import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bbl-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  sNombre: string;
  constructor() { }

  ngOnInit() {
    this.sNombre = 'Jesucristo';
  }

  respuestaHijo() {
    console.log('Respuesta del hijo');
    this.sNombre = '';
  }
}
