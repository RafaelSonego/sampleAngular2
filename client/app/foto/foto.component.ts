import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'foto',
    templateUrl: './foto.component.html'
})
export class FotoComponent{

    @Input() titulo : String;
    @Input() url : String;
    descricao : String;

}