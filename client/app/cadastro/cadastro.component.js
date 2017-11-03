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
var foto_component_1 = require('../foto/foto.component');
var forms_1 = require('@angular/forms');
var foto_service_1 = require('../foto/foto.service');
var router_1 = require('@angular/router');
var CadastroComponent = (function () {
    function CadastroComponent(fotoService, fb, activatedRoute, router) {
        var _this = this;
        this.foto = new foto_component_1.FotoComponent();
        this.mensagem = '';
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fotoService = fotoService;
        this.activatedRoute.params.subscribe(function (params) {
            var id = params['id'];
            if (id) {
                _this.fotoService
                    .buscaPorId(id)
                    .subscribe(function (foto) { return _this.foto = foto; }, function (erro) { return console.log(erro); });
            }
        });
        //Os valores que estiverem aqui tem que ser correspondentes ao FormControlName que está na view
        this.meuForm = fb.group({
            titulo: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(4)])],
            url: ['', forms_1.Validators.required],
            descricao: ['']
        });
    }
    CadastroComponent.prototype.cadastrar = function (event) {
        var _this = this;
        event.preventDefault();
        this.fotoService
            .cadastrar(this.foto)
            .subscribe(function (res) {
            _this.mensagem = res.getMensagem();
            if (res.isInclusao()) {
                _this.foto = new foto_component_1.FotoComponent();
            }
            else {
                _this.router.navigate(['']);
            }
            console.log('Sucesso!');
        }, function (erro) { return console.log(erro); });
    };
    CadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro',
            templateUrl: './cadastro.component.html'
        }), 
        __metadata('design:paramtypes', [foto_service_1.FotoService, forms_1.FormBuilder, router_1.ActivatedRoute, router_1.Router])
    ], CadastroComponent);
    return CadastroComponent;
}());
exports.CadastroComponent = CadastroComponent;
//# sourceMappingURL=cadastro.component.js.map