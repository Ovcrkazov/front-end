import { Component } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent {
    public list:{title:string, content:string}[] = [{title:"Titre", content:"Contenu"}, {title:"Titre2", content:"Contenu2"},{title:"Titre3", content:"Contenu3"},{title:"Titre4", content:"Contenu4"}];
}
