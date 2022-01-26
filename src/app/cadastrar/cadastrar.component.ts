import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {
  usuarios: Usuarios = new Usuarios


  constructor() { }

  ngOnInit() {
    window.scroll(0,0)
  }

}
