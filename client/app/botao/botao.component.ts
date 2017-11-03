import {Component, Input, EventEmitter, Output} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'botao',
    templateUrl: './botao.component.html'
})
export class BotaoComponent {
    @Input() nome : string = 'OK';
    @Input() estilo : string = 'btn-default';
    @Input() tipo : string = 'button';
    @Input() desabilitado : boolean = false;
    @Output() action = new EventEmitter(); //Informa que alguém de fora irá passar um evento a ser executado
    @Input() confirmacao: boolean = false;
    
    executarAcao() {
       if(this.confirmacao) {
            if(confirm('Tem certeza?')) {
                this.action.emit(null); 
            }
            return;
        }
        this.action.emit(null);
    }

}