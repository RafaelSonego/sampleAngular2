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
var BotaoComponent = (function () {
    function BotaoComponent() {
        this.nome = 'OK';
        this.estilo = 'btn-default';
        this.tipo = 'button';
        this.desabilitado = false;
        this.action = new core_1.EventEmitter(); //Informa que alguém de fora irá passar um evento a ser executado
        this.confirmacao = false;
    }
    BotaoComponent.prototype.executarAcao = function () {
        if (this.confirmacao) {
            if (confirm('Tem certeza?')) {
                this.action.emit(null);
            }
            return;
        }
        this.action.emit(null);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BotaoComponent.prototype, "nome", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BotaoComponent.prototype, "estilo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], BotaoComponent.prototype, "tipo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], BotaoComponent.prototype, "desabilitado", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BotaoComponent.prototype, "action", void 0);
    __decorate([
        //Informa que alguém de fora irá passar um evento a ser executado
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], BotaoComponent.prototype, "confirmacao", void 0);
    BotaoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'botao',
            templateUrl: './botao.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], BotaoComponent);
    return BotaoComponent;
}());
exports.BotaoComponent = BotaoComponent;
//# sourceMappingURL=botao.component.js.map