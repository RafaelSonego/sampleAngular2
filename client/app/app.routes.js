"use strict";
var router_1 = require('@angular/router');
var cadastro_component_1 = require('./cadastro/cadastro.component');
var listagem_component_1 = require('./listagem/listagem.component');
//Importa os componentes que serão utilizados na rota
//Routes define as paginas e a url correspondente para que o angular faça o de-para - Array de Json com path e component
var appRoutes = [
    { path: '', component: listagem_component_1.ListagemComponent },
    { path: 'cadastro', component: cadastro_component_1.CadastroComponent },
    { path: 'cadastro/:id', component: cadastro_component_1.CadastroComponent },
    { path: '**', component: listagem_component_1.ListagemComponent }
];
//O RouterModule que irá compilar as rotas. Precisa ser exportado esse cara
//Ele que será utilizado pelo angular
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map