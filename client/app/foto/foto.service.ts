import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class FotoService {

    url: string = 'v1/fotos';
    http: Http;
    headers: Headers;

    //Angular está injetando um obj Http para o nosso atributo de classe
    constructor(http: Http){
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type','application/json');
    }

    cadastrar(foto: FotoComponent) : Observable<MensagemFoto> {
        //Caso tenha id estou fazendo uma atualizacao.. put caso contrario estou cadastrando.. post
        if(foto._id) {
            return this.http
                //Passa o caminho do serviço, a foto no formato texto e o header
                .put(this.url + '/' + foto._id, JSON.stringify(foto), {headers : this.headers})
                .map(() => new MensagemFoto('Foto alterada com sucesso', false));
        } else {
            return this.http
                //Passa o caminho do serviço, a foto no formato texto e o header
                .post(this.url, JSON.stringify(foto), {headers : this.headers})
                .map(() => new MensagemFoto('Foto incluída com sucesso', true));
        }
    }

    listar() : Observable<FotoComponent[]> {
        return this.http
                    .get(this.url)
                    .map(res => res.json());
    }

    remove(foto : FotoComponent){
        return this.http.delete(this.url + '/' + foto._id);
    }

    buscaPorId(id : string) : Observable<FotoComponent> {
        return this.http
                    .get(this.url + '/' + id)
                    .map(res => res.json());
    }
}

export class MensagemFoto {
    private _mensagem: string;
    private _inclusao: boolean;

    /*
    Com isso, nao precisamos declarar variaveis pois o typescript vai entender que teremos atributos privados na classe
    constructor(private _mensagem: string, private _inclusao: boolean){
        this._mensagem = _mensagem;
        this._inclusao = _inclusao;
    }
    */
    constructor(mensagem: string, inclusao: boolean){
        this._mensagem = mensagem;
        this._inclusao = inclusao;
    }

    public getMensagem() : string{
        return this._mensagem;
    }

    public isInclusao() : boolean{
        return this._inclusao;
    }

    // Outra maneira de recuperar os atributos..
    get mensagem() : string{
        return this._mensagem;
    }

    get inclusao() : boolean{
        return this._inclusao;
    }

}