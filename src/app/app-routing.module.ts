import { DeletePostagemComponent } from './delete/delete-postagem/delete-postagem.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FeedComponent } from './feed/feed.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { TemasComponent } from './temas/temas.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent } from './delete/tema-delete/tema-delete.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';


const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'sobrenos', component: SobrenosComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastro', component: CadastrarComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'temas', component: TemasComponent},
  {path: 'postagem-edit/:id', component: PostagemEditComponent},
  {path: 'delete-postagem/:id', component: DeletePostagemComponent},
  {path: 'tema-edit/:id', component: TemaEditComponent},
  {path: 'tema-delete/:id', component: TemaDeleteComponent},
  {path: 'usuario-edit/:id', component: UsuarioEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
