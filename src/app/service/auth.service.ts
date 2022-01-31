import { HttpHeaders, HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { Usuario } from '../model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }

  refreshToken() {
    this.token = {
      headers: new HttpHeaders().set('Authorization', environment.token)
    }
  }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin> {
    return this.http.post<UsuarioLogin>('https://wehug.herokuapp.com/usuarios/logar', usuarioLogin);
  }

  cadastrar(usuarios: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>('https://wehug.herokuapp.com/usuarios/cadastrar', usuarios);

  }

  getByIdUser(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`https://wehug.herokuapp.com/usuarios/${id}`, this.token)
    }

  logado() {
    let ok: boolean = false

    if (environment.token != '') {
      ok = true
    }

    return ok
  }



}



