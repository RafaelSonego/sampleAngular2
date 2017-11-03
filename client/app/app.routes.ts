import {RouterModule, Routes} from '@angular/router';
import {CadastroComponent} from './cadastro/cadastro.component';
import {ListagemComponent} from './listagem/listagem.component';

//Importa os componentes que serão utilizados na rota
//Routes define as paginas e a url correspondente para que o angular faça o de-para - Array de Json com path e component

const appRoutes : Routes = [
    {path: '' , component: ListagemComponent},
    {path: 'cadastro' , component: CadastroComponent},
    {path: 'cadastro/:id' , component: CadastroComponent},
    {path: '**' , component: ListagemComponent}
];

//O RouterModule que irá compilar as rotas. Precisa ser exportado esse cara
//Ele que será utilizado pelo angular
export const routing = RouterModule.forRoot(appRoutes);


