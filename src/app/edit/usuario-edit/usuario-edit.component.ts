import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { AlertasService } from 'src/app/service/alertas.service';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  usuario: Usuario = new Usuario()
  idUsuario: number
  confirmarSenha: string
  tipoUsua: string


  constructor(
    private authService: AuthService,
    private router: Router,
    private route:ActivatedRoute,
    private alertas: AlertasService

  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idUsuario = this.route.snapshot.params['id']
    this.findByIdUsuario(this.idUsuario)
  }

  confirmSenha(event: any){
    this.confirmarSenha = event.target.value
  }

  tipoUsuario(event: any){
    this.tipoUsua = event.target.value
  }

  atualizar(){
    this.usuario.tipo = this.tipoUsua
    
    if(this.usuario.senha != this.confirmarSenha){
      this.alertas.showAlertDanger('As senhas estão divergentes. Tente novamente!')
    } else {
      /*Pega os valores inseridos na variável user,
      transforma em Json para que o Backend entenda a requisição*/
      this.authService.atualizar(this.usuario).subscribe((resp: Usuario) => {
        this.usuario = resp
        // Redireciona o usuário
        this.router.navigate(['/inicio'])
        this.alertas.showAlertSuccess('Usuário atualizado com sucesso, faça o login novamente!')
                      
        environment.token =  ''
        environment.nome = ''
        environment.foto = ''
        environment.id = 0
       

        this.router.navigate(['/entrar'])
      })
    }

  }                             

  findByIdUsuario (id: number){
    this.authService.getByIdUser(id).subscribe((resp: Usuario) => {
      this.usuario = resp
    })
  }

}