import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


storeName(email:any,nombre:any,sexo:any,fecha:any) {
  localStorage.setItem('email',email);
  localStorage.setItem('nombre',nombre);
  localStorage.setItem('sexo',sexo);
  localStorage.setItem('fecha',fecha);
}

  constructor() { }

  ngOnInit(): void {
  }

}

