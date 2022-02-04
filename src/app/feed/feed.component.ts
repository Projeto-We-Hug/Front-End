import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  postagem: Postagem = new Postagem()
  listaPostagens: Postagem[]

  tema: Tema = new Tema()
  listaTemas: Tema[]
  idTema: number
  ativo = false

  usuario: Usuario = new Usuario()
  idUsuario = environment.id

  key = 'data'
  reverse = true

  constructor(
    private router: Router,
    private temaService: TemaService,
    private authService: AuthService,
    private postagemService: PostagemService,
    private alertas: AlertasService

  ) { }

  nome = environment.nome
  foto = environment.foto
  id = environment.id


  ngOnInit() {
    window.scroll(0, 0)

    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.authService.refreshToken()
    this.getAllTemas()
    this.getAllPostagens()
  }

  getAllTemas() {
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.listaTemas = resp
    })

  }

  findByIdTema() {
    this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
      this.tema = resp
    })
  }

  getAllPostagens() {
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.listaPostagens = resp
    })
  }

  findByIdUser() {
    this.authService.getByIdUser(this.idUsuario).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

  publicar() {
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    this.usuario.id = this.idUsuario
    this.postagem.usuario = this.usuario

    this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
      this.postagem = resp
      this.alertas.showAlertSuccess('Postagem realizada com sucesso!')
      this.postagem = new Postagem()
      this.getAllPostagens()
      this.router.navigate(['/feed'])
    })
  }

  sair(){
    this.router.navigate(['/entrar'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0

  }

}