import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ContraComponent } from "./component/contra/contra.component";
import { CursosComponent } from "./component/cursos/cursos.component";
import { Cursos2Component } from "./component/cursos2/cursos2.component";
import { LoginComponent } from "./component/login/login.component";
import { PrincipalComponent } from "./component/principal/principal.component";
import { PublicacionesComponent } from "./component/publicaciones/publicaciones.component";
import { RegistroComponent } from "./component/registro/registro.component";


const app_routes: Routes = [
    { 
        path: 'Principal', 
        component:PrincipalComponent
    },
    {
        path: 'Login',
        component:LoginComponent
    },
    {
        path: 'Publicaciones',
        component:PublicacionesComponent
    },
    {
        path: 'Cursos',
        component:CursosComponent
    },
    {
        path: 'Registro',
        component:RegistroComponent
    },
    {
        path : 'Contra',
        component:ContraComponent
    },
    {
        path : 'Profesores',
        component:Cursos2Component
    },

    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ''
    }

];
@NgModule({
    imports: [
        RouterModule.forRoot(app_routes, {useHash: true})
    ],
    exports: [
        RouterModule
    ]

})
export class AppRoutingModule {

}