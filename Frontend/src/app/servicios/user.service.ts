import { Injectable } from '@angular/core';
import {Usuario} from '../modelos/usuario';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  CreateLogin(usuario1: Usuario): Observable<Usuario> {
    return this.http.post('https://localhost/login', usuario1);
  }

}
