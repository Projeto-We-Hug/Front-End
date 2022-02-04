import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SobreComponent } from './sobre/sobre.component';
import { InicioComponent } from './inicio/inicio.component';
import { TemasComponent } from './temas/temas.component';
import { FeedComponent } from './feed/feed.component';
import { MenulogadoComponent } from './menulogado/menulogado.component';
import { PostagemEditComponent } from './edit/postagem-edit/postagem-edit.component';
import { DeletePostagemComponent } from './delete/delete-postagem/delete-postagem.component';
import { TemaEditComponent } from './edit/tema-edit/tema-edit.component';
import { TemaDeleteComponent} from './delete/tema-delete/tema-delete.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { UsuarioEditComponent } from './edit/usuario-edit/usuario-edit.component';
import { AlertasComponent } from './alertas/alertas.component';
import { ModalModule } from 'ngx-bootstrap';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RodapeComponent,
    EntrarComponent,
    CadastrarComponent,
    SobreComponent,
    SobrenosComponent,
    InicioComponent,
    TemasComponent,
    FeedComponent,
    MenulogadoComponent,
    PostagemEditComponent,
    DeletePostagemComponent,
    TemaEditComponent,
    TemaDeleteComponent,
    SobrenosComponent,
    UsuarioEditComponent,
    AlertasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    OrderModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy,
    }],
    
  bootstrap: [AppComponent]
  
})
export class AppModule { }
