import { Pipe, PipeTransform } from '@angular/core'
import {FotoComponent} from './foto.component';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {

    transform(fotos: FotoComponent[], filtro: String) {
        return fotos.filter(foto => {
            return foto.titulo.toLowerCase().includes(filtro.toLowerCase());
        });
    }

}