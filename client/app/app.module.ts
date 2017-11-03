import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FotoModel} from './foto/foto.model';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map'
import {PainelModule} from './painel/painel.module';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';
import {routing} from './app.routes';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BotaoModule} from './botao/botao.module';

//é o modulo principal do projeto, logo ele que irá importar todos os outros modulos e componentes
@NgModule({
    imports: [
        BrowserModule, 
        FotoModel, 
        HttpModule, // Para requisicoes ajax pro meu servidor
        PainelModule, 
        routing, //Precisa ser importado o modulo de rotas que foi configurado
        FormsModule, //Para utilizar o ngModel, ngForm etc nas views
        ReactiveFormsModule, // Permite que validaçoes sejam feitas no modelo
        BotaoModule
    ],
    declarations: [AppComponent, CadastroComponent, ListagemComponent], //Lista de componentes
    bootstrap: [AppComponent] //Será o primeiro componente a ser executado
})
export class AppModule{

}