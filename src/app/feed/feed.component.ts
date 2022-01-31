import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Temas } from '../model/Temas';
import { AuthService } from '../service/auth.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  tema: Temas = new Temas()
  listaTemas: Temas[]
  idTema: number

  constructor(
    private router: Router,
    private temaService: TemaService,
    private authService: AuthService
    
  ) { }

  ngOnInit() {

    window.scroll (0,0)

    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }
    this.authService.refreshToken()
    this.getAllTemas()
  }

  getAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Temas[]) => {
      this.listaTemas = resp
    })
  }

}
