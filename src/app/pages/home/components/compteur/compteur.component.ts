import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss']
})
export class CompteurComponent {
  public consoAmazon:number = 0; // en kgCO2eq
  public consoX:number = 0; // en gCO2eq
  public consoFacebook:number = 0; // en gCO2eq
  
  constructor() {
    setInterval(() => this.updateConso(), 100); // Appelle la fonction updateConso() toutes les secondes
  }

  public updateConso() {
    this.consoAmazon += 226; // 0.1 seconde = 2268518.52 kgCO2eq
    this.consoX = Math.round((this.consoX + 0.02) *100)/100; // 0.1 seconde = 0.02 kgCO2eq
    this.consoFacebook += 13; // 0.1 seconde = 126839.17 kgCO2eq
  }
}
