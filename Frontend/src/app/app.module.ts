import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './component/login/login.component';
import { PrincipalComponent } from './component/principal/principal.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { TablaComponent } from './component/tabla/tabla.component';
import { CursosComponent } from './component/cursos/cursos.component';
import { PublicacionesComponent } from './component/publicaciones/publicaciones.component';
import { Cursos2Component } from './component/cursos2/cursos2.component';
import { AppRoutingModule } from './app-routing.module';
import { NosotrosComponent } from './component/nosotros/nosotros.component';
import { RegistroComponent } from './component/registro/registro.component';
import { MatTableModule } from '@angular/material/table';
import {FormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ContraComponent } from './component/contra/contra.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    HeaderComponent,
    FooterComponent,
    TablaComponent,
    CursosComponent,
    PublicacionesComponent,
    Cursos2Component,
    NosotrosComponent,
    RegistroComponent,
    ContraComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
