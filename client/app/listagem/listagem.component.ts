import {Component} from '@angular/core';
import {FotoService} from '../foto/foto.service';
import {FotoComponent} from '../foto/foto.component'

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent{

    fotos: FotoComponent[] = [];
    fotoService : FotoService;
    mensagem: string= '';
    
        //Faz a chamada Ajax para o servidor, Precisa importar o Modulo HTTP que esta no modulo principal do 
        //projeto e por ser tipado, ele ja irá entender que o angular precisa montar o HTTP para nós (injetar)
    constructor(fotoService : FotoService){
        this.fotoService = fotoService;
        this.listarFotos();
    }

    listarFotos(){
        this.fotoService
            .listar()
            .subscribe(fotos => {
                this.fotos = fotos;
                console.log(this.fotos);
            }, erro => console.log(erro)); 
    }

    remover(foto){
        this.fotoService
                .remove(foto)
                .subscribe(
                    () => {
                        /*
                        //Outra Maneira sem precisar chamar o serviço novamente (eu acho escroto mas por performance ok)
                        let novasFotos = this.fotos.splice(0);
                        let indice = novasFotos.indexOf(foto);
                        novasFotos.splice(indice, 1);
                        this.fotos = novasFotos;
                        */
                        this.mensagem = 'Foto removida com sucesso!';
                        this.listarFotos();
                    },
                    erro => {
                        console.log(erro);
                        this.mensagem = 'Falha ao remover a foto!';
                    }
                ); 
    }

}