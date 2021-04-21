import { Template } from '@angular/compiler/src/render3/r3_ast';
import { Component } from '@angular/core'

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'})

export class BodyComponent{

    mostrar = false;

    frase: any = {

        mensaje : `El que quiere puede.`,
      autor:`La vida`
    };

    personajes: string[] = ['SuperMan','Spiderman','Mujer Mara villa','Batman']

}




