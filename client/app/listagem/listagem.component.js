"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var ListagemComponent = (function () {
    //Faz a chamada Ajax para o servidor, Precisa importar o Modulo HTTP que esta no modulo principal do 
    //projeto e por ser tipado, ele ja irá entender que nao o angular precisa montar o HTTP para nós
    function ListagemComponent(http) {
        var _this = this;
        this.fotos = [];
        var stream = http.get('v1/fotos');
        // como parametro, recebe uma funcao com a response
        stream.subscribe(function (res) {
            _this.fotos = res.json(); // Ja temos o array como que veio do servidor
            console.log(_this.fotos);
        });
    }
    ListagemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listagem',
            templateUrl: './listagem.component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ListagemComponent);
    return ListagemComponent;
}());
exports.ListagemComponent = ListagemComponent;
//# sourceMappingURL=listagem.component.js.map