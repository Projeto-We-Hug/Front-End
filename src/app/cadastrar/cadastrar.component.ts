import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuario: Usuario = new Usuario

  confirmarSenha: string
  tipoUsuarios: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)

    /* Caso de F5 (atualize a página) será informado e solicitado que o usuario entre novamente */
    if(environment.token == ''){
      alert('Sua Sessão Expirou, logue novamente')
      this.router.navigate(['/entrar'])
    }
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event: any){
    this.tipoUsuarios = event.target.value
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUsuarios

    if(this.usuario.senha != this.confirmarSenha){
      console.log(this.usuario.senha)
      console.log(this.confirmarSenha)

      alert('As senhas estão Diferentes')
    } 
    else{
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/entrar'])
        alert('Usuario Cadastrado com sucesso!')
      })
      }
    }
  }