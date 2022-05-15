import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
 
  
  nombre:any;
  sexo:any;
  fecha:any;
  email:any;
  constructor(){
      
      this.obtenerdatos();
  }
  obtenerdatos(){
    this.nombre = localStorage.getItem('nombre');
    this.email = localStorage.getItem('email');
    this.sexo = localStorage.getItem('sexo');
    this.fecha = localStorage.getItem('fecha');
   
  }
  ngOnInit(): void {
  }

}
