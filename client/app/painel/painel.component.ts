import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id, //Com isso eu posso passar o caminho do templateUrl direto, sem precisar de todo o caminho
    selector: 'painel',
    templateUrl: './painel.component.html'
})
export class PainelComponent{

    @Input() titulo : String;

}