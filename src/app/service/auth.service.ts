import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuarios } from '../model/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { 

  }

  entrar(usuarioLogin: UsuarioLogin):Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://wehug.herokuapp.com/usuarios/logar', usuarioLogin);
  }

  cadastrar(usuarios: Usuarios):Observable<Usuarios> {
    return this.http.post<Usuarios>('https://wehug.herokuapp.com/usuarios/cadastrar', usuarios);

  }
}

