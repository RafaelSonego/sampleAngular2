import {NgModule} from '@angular/core';
import {FotoComponent} from './foto.component';
import {FiltroPorTitulo} from './foto.pipe'
@NgModule({
    declarations: [FotoComponent, FiltroPorTitulo], // O que faz parte do modulo
    exports: [FotoComponent, FiltroPorTitulo] // Quem for utilizar o modulo consiguira utilizar este componente
})
export class FotoModel{

}