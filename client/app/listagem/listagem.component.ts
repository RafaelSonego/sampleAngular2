import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'listagem',
    templateUrl: './listagem.component.html'
})
export class ListagemComponent{

    fotos: Array<Object> = [];
    
        //Faz a chamada Ajax para o servidor, Precisa importar o Modulo HTTP que esta no modulo principal do 
        //projeto e por ser tipado, ele ja irá entender que nao o angular precisa montar o HTTP para nós
        constructor(http : Http){
    
            let stream = http.get('v1/fotos');
            // como parametro, recebe uma funcao com a response
            stream.subscribe(res => {
                this.fotos = res.json(); // Ja temos o array como que veio do servidor
                console.log(this.fotos);
        });
    
    }
}