import { Component } from '@angular/core';
import dataQ from 'src/assets/questions.json';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss']
})
export class QuestionnaireComponent {
  public nbrQuestionRep: number = 0;

  public data:any  = dataQ

}
