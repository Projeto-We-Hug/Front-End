import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menulogado',
  templateUrl: './menulogado.component.html',
  styleUrls: ['./menulogado.component.css']
})
export class MenulogadoComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  nome = environment.nome 
  foto = environment.foto
  id = environment.id


  ngOnInit() {
    window.scroll(0,0)
  }

  sair(){
    this.router.navigate(['/inicio'])
    environment.token = ''
    environment.nome = ''
    environment.foto = ''
    environment.id = 0

  }

}


