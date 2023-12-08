import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CompteurComponent } from './pages/home/components/compteur/compteur.component';
import { QuestionnaireComponent } from './pages/questionnaire/questionnaire.component';
import { InfosComponent } from './pages/infos/infos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompteurComponent,
    QuestionnaireComponent,
    InfosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
