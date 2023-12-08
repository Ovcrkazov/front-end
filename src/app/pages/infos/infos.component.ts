import { Component } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent {
    public list:{title:string, content:string}[] = [{title:"Ça fais beaucoup là non ?", content:"Chaque année nous perdon environ 1.2 Trillions de tonnes de glaces. Cela represante environ 1 224 489 800 000 000 000 Clio 2 ou 106 fois la masse de la Lune"}, {title:"Titre2", content:"Contenu2"},{title:"Titre3", content:"Contenu3"},{title:"Titre4", content:"Contenu4"}];
}
