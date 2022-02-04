import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
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
    private router: Router,
    private alertas: AlertasService
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
    this.usuario.tipo = this.tipoUsuarios

    if(this.usuario.senha != this.confirmarSenha){
      console.log(this.usuario.senha)
      console.log(this.confirmarSenha)

      alert('As senhas estão diferentes, tente novamente!')
    } 
    else{
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        this.router.navigate(['/entrar'])
        this.alertas.showAlertSuccess('Usuario cadastrado com sucesso!')
      })
      }
    }
  }