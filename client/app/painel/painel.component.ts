import {Component, Input, OnInit} from '@angular/core';

@Component({
    moduleId: module.id, //Com isso eu posso passar o caminho do templateUrl direto, sem precisar de todo o caminho
    selector: 'painel',
    templateUrl: './painel.component.html',
    styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit{

    @Input() titulo : String;
    
    ngOnInit(){
        this.titulo = this.titulo.length > 10 ? this.titulo.substr(0,10) + " ..." : this.titulo;
    }

}