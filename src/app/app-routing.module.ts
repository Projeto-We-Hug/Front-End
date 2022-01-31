import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { FeedComponent } from './feed/feed.component';
import { InicioComponent } from './inicio/inicio.component';
import { SobreComponent } from './sobre/sobre.component';
import { TemasComponent } from './temas/temas.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastro', component: CadastrarComponent},
  {path: 'feed', component: FeedComponent},
  {path: 'temas', component: TemasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
