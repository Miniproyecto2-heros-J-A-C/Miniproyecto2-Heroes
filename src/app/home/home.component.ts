import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  indice: number = 0;
  mail: string[] = [];
  name: string[] = [];
  sex: string[] = [];
  date: string[] = [];

  storeName(email: any, nombre: any, sexo: any, fecha: any) {
    this.mail[this.indice] = email;
    this.name[this.indice] = nombre;
    this.sex[this.indice] = sexo;
    this.date[this.indice] = fecha;
    localStorage.setItem('email', JSON.stringify(this.mail));
    localStorage.setItem('nombre', JSON.stringify(this.name));
    localStorage.setItem('sexo', JSON.stringify(this.sex));
    localStorage.setItem('fecha', JSON.stringify(this.date));
    this.indice++;
    console.log(this.indice);
    console.log(this.mail);
  }

  constructor() {}

  ngOnInit(): void {}
}
