import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuarios } from '../model/Usuarios';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
    ) {}

    token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }

    refreshToken() {
      this.token = {
        headers: new HttpHeaders().set('Authorization', environment.token)
      }
    }

  entrar(usuarioLogin: UsuarioLogin):Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://wehug.herokuapp.com/usuarios/logar', usuarioLogin);
  }

  cadastrar(usuarios: Usuarios):Observable<Usuarios> {
    return this.http.post<Usuarios>('https://wehug.herokuapp.com/usuarios/cadastrar', usuarios);

  }
  
  logado (){
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }



}



