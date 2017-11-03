import {Component} from '@angular/core';
import {FotoComponent} from '../foto/foto.component';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import {FotoService} from '../foto/foto.service'
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'cadastro',
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent{

    foto : FotoComponent = new FotoComponent();
    fotoService: FotoService;
    meuForm: FormGroup;
    activatedRoute: ActivatedRoute;
    router: Router;
    mensagem: string = '';

    constructor(fotoService: FotoService, fb: FormBuilder, activatedRoute: ActivatedRoute, router: Router){
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fotoService = fotoService;
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            if(id){
                this.fotoService
                .buscaPorId(id)
                .subscribe(
                    foto => this.foto = foto, 
                    erro => console.log(erro)
                );
            }
        });

        //Os valores que estiverem aqui tem que ser correspondentes ao FormControlName que está na view
        this.meuForm = fb.group({
            titulo: ['', Validators.compose([ Validators.required, Validators.minLength(4) ])],
            url: ['', Validators.required],
            descricao: ['']
        });
    }

    cadastrar(event){
        event.preventDefault();

        this.fotoService
                .cadastrar(this.foto)
                .subscribe(res => {
                    this.mensagem = res.getMensagem();
                    if(res.isInclusao()){
                        this.foto = new FotoComponent();                       
                    } else {
                        this.router.navigate(['']);
                    }
                    console.log('Sucesso!');
                }, (erro) => console.log(erro)); 
    }

}