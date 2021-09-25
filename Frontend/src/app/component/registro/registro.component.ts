import { Component, OnInit } from '@angular/core';
import {UserService} from 'src/app/servicios/user.service';
import { Usuario } from 'src/app/modelos/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private servicioUsuario: UserService) { }

  ngOnInit(): void {
  }

  registroAcademico: any; 
  contraInicio: any;
  nombreUsuario: Usuario={
    
    registroAcademico: 0,
    contrasena: "" 

  }; 

prueba(){
console.log(this.registroAcademico)
console.log(this.contraInicio)
}

ingresarLogin(){
  this.nombreUsuario.registroAcademico = this.registroAcademico; 
  this.nombreUsuario.contrasena = this.contraInicio;
  this.servicioUsuario.CreateLogin(this.nombreUsuario).subscribe((res)=>{

    console.log("Datos correctos")

  });

}   
  



}







