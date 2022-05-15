import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  nombre: any[] = [];
  sexo: any[] = [];
  fecha: any;
  email: any;
  indice: number = 0;

  constructor() {
    this.obtenerdatos();
  }
  obtenerdatos() {
    this.nombre = JSON.parse(localStorage.getItem('nombre') || '{}');
    this.email = JSON.parse(localStorage.getItem('email') || '{}');
    this.sexo = JSON.parse(localStorage.getItem('sexo') || '{}');
    this.fecha = JSON.parse(localStorage.getItem('fecha') || '{}');
  }
  ngOnInit(): void {}
}
