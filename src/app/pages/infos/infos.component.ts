import { Component } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent {
    public list:{title:string, content:string, categorie:string}[] = [{title:"Émissions de gaz à effet de serre par secteur", content:"Les transports sont la principales cause d’émission de gaz à effet de serre, avec 32 % de l’émission, suivi de l’agriculture à 19 % et de l’industrie a 18 %.", categorie:"Informations"},
    {title:"Conséquences du réchauffement climatique", content:"Les conséquences du réchauffement climatique sont importante : La montée du niveau des mers, qui menace les zones côtières, la perturbation des écosystèmes qui a d’énorme impact sur la biodiversité, mais aussi une influence sur la production agricole qui fait varier bien trop la fréquence des récoltes et leur qualité.", categorie:"Informations"},
    {title:"Prévisions de réchauffement climatique", content:"Sans un renforcement urgent des politiques climatiques actuelles, une augmentation de 3,2 °C est prévue d'ici la fin du siècle, selon les statistiques du GIEC.", categorie:"Informations"},
    {title:"Impact de l'aviation sur les émissions de CO2", content:"L’aviation est responsable à elle seule de 2,4 % des émissions de Co2.", categorie:"Informations"},
    {title:"Bilan individuel des émissions de CO2", content:"Chaque année, une personne produit près de 9,0 tonnes de CO2eq. Cela représente l’équivalent de un peu plus de 5 allez-retour en avion Paris/New-York.", categorie:"Informations"},
    {title:"Pouvoir des actions individuelles face au changement climatique", content:"Les actions individuelles n’ont pas d’impact face aux bouleversements écologiques → Si chacun se mobilise, change son mode de vie, utilise des énergies propres, diminue sa consommation, boycotte les entreprises polluantes… des résultats peuvent intervenir. Le changement climatique est provoqué par l’homme, lui seul peut influer sur le destin de la planète.", categorie:"IdeesRecues"},
    {title:"L'importance de la hausse de 2 °C", content:"+2 °C c’est pas beaucoup ! → Lors de la dernière glaciation, il faisait seulement 5 °C de moins et le niveau de la mer était 120 mètres plus bas. Même si cela peut sembler négligeable à l’échelle de la planète deux degrés de plus, c’est énorme. Chaque dixième de degré est important pour limiter le changement climatique. Si l’augmentation de la température évolue entre 1,5 °C et 2 °C se seront 10 millions de personnes supplémentaires qui seront menacées par la hausse du niveau des mers.", categorie:"IdeesRecues"},
    {title:"Consensus scientifique sur le changement climatique", content:"Les climatologues sont partagés sur l'existence et les causes du changement climatique → non, 97 % sont d’accord pour dire que le changement climatique se produit et est causé par l’homme.", categorie:"IdeesRecues"},
    {title:"Adaptation des animaux et des plantes", content:"Les animaux et les plantes s’adapteront → Il y a déjà eu des précédents de changement climatique rapide qui ont été suivis d’une extinction de masse.", categorie:"IdeesRecues"},
    {title:"Coût du changement vers des énergies propres", content:"Ça coûte trop cher → le modèle énergétique actuel impacte davantage la société. Une sobriété énergétique aurait un impact bénéfique sur l’économie actuelle sur le long terme.", categorie:"IdeesRecues"}];
}
