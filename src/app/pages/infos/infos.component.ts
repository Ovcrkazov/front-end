import { Component } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss'],
})
export class InfosComponent {
  public list: { title: string; content: string }[] = [
    {
      title: "Et si c'était utile ?",
      content:
        "L'intensification des solutions climatiques naturelles, telles que la restauration des forêts dégradées, pourrait créer jusqu'à 20 millions de nouveaux emplois. Au total, la restauration des écosystèmes crée 3,7 fois plus d'emplois que la production de pétrole et de gaz par dollar.",
    },
    {
      title: 'Monster kill !',
      content:
        "Plus d'un million d'espèces sont menacées d'extinction. Alors que le taux d’extinction attendu des espèces est généralement d’environ cinq espèces par an, nous perdons actuellement jusqu’à 10 000 fois le taux normal. Ce qui signifie que des dizaines d’espèces disparaissent chaque jour.",
    },
    {
      title: "L'union fait la force",
      content:
        'Promouvoir des transports publics sûrs et des activités actives comme marcher ou utiliser les transports publics peut contribuer à réduire les émissions de carbone. Cela peut également contribuer à réduire la circulation, la pollution de l’air et ainsi réduire les maladies cardiovasculaires.',
    },
    {
      title: 'Ça fais beaucoup là non ?',
      content:
        'Chaque année nous perdons environ 1.2 trillions de tonnes de glaces. Cela représente environ 1 224 489 800 000 000 000 Clio 2 ou 106 fois la masse de la Lune',
    },
  ];
}
