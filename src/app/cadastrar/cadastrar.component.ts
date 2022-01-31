import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  usuarios: Usuario = new Usuario

  confirmarSenha: string
  tipoUsuarios: string

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event: any){
    this.tipoUsuarios = event.target.value
  }

  cadastrar(){
    this.usuarios.tipo = this.tipoUsuarios

    if(this.usuarios.senha != this.confirmarSenha){
      console.log(this.usuarios.senha)
      console.log(this.confirmarSenha)

      alert('As senhas estão Diferentes')
    } 
    else{
      this.authService.cadastrar(this.usuarios).subscribe((resp: Usuario) => {
        this.usuarios = resp
        this.router.navigate(['/entrar'])
        alert('Usuario Cadastrado com sucesso!')
      })
      }
    }
  }