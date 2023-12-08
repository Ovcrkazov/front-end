import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CompteurComponent } from './pages/home/components/compteur/compteur.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { InfosComponent } from './pages/infos/infos.component';
import { GestesDuQuotidienComponent } from './gestes-du-quotidien/gestes-du-quotidien.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompteurComponent,
    QuestionnaireComponent,
    InfosComponent,
    GestesDuQuotidienComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
