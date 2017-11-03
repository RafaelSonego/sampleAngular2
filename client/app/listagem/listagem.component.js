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
var foto_service_1 = require('../foto/foto.service');
var ListagemComponent = (function () {
    //Faz a chamada Ajax para o servidor, Precisa importar o Modulo HTTP que esta no modulo principal do 
    //projeto e por ser tipado, ele ja irá entender que o angular precisa montar o HTTP para nós (injetar)
    function ListagemComponent(fotoService) {
        this.fotos = [];
        this.mensagem = '';
        this.fotoService = fotoService;
        this.listarFotos();
    }
    ListagemComponent.prototype.listarFotos = function () {
        var _this = this;
        this.fotoService
            .listar()
            .subscribe(function (fotos) {
            _this.fotos = fotos;
            console.log(_this.fotos);
        }, function (erro) { return console.log(erro); });
    };
    ListagemComponent.prototype.remover = function (foto) {
        var _this = this;
        this.fotoService
            .remove(foto)
            .subscribe(function () {
            /*
            //Outra Maneira sem precisar chamar o serviço novamente (eu acho escroto mas por performance ok)
            let novasFotos = this.fotos.splice(0);
            let indice = novasFotos.indexOf(foto);
            novasFotos.splice(indice, 1);
            this.fotos = novasFotos;
            */
            _this.mensagem = 'Foto removida com sucesso!';
            _this.listarFotos();
        }, function (erro) {
            console.log(erro);
            _this.mensagem = 'Falha ao remover a foto!';
        });
    };
    ListagemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listagem',
            templateUrl: './listagem.component.html'
        }), 
        __metadata('design:paramtypes', [foto_service_1.FotoService])
    ], ListagemComponent);
    return ListagemComponent;
}());
exports.ListagemComponent = ListagemComponent;
//# sourceMappingURL=listagem.component.js.map