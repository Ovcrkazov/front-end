import { Component } from '@angular/core';
import dataQ from 'src/assets/questions.json';
@Component({
  selector: 'app-questionnaire',
  templateUrl: './questionnaire.component.html',
  styleUrls: ['./questionnaire.component.scss'],
})
export class QuestionnaireComponent {
  public nbrQuestionRep: number = 0;

  public data: any = dataQ.questions;

  public questIndex: number[];
  public selIndex: number[] = [];

  public actuelQuestIndex!: number;

  public point: number = 0;

  public selectionedQuest: boolean[] = [false, false, false, false];

  public questRestante: number = 10;

  public maxPointPotential = 0;

  constructor() {
    this.questIndex = [];
    for (let index = 0; index < this.data.length; index++) {
      this.questIndex.push(index);
    }

    this.getRandomQuestion();
  }

  getRandomQuestion() {
    this.actuelQuestIndex =
      this.questIndex[Math.floor(Math.random() * this.questIndex.length)];
    this.selIndex.push(this.actuelQuestIndex)
    if (this.questIndex.length > 1) {
    this.questIndex.splice(this.actuelQuestIndex, 1);
    }
  }

  nextQuestion() {
    if (
      this.selectionedQuest[0] ||
      this.selectionedQuest[1] ||
      this.selectionedQuest[2] ||
      this.selectionedQuest[3]
    ) {

      for (let index = 0; index < 4; index++) {
        if (this.data[this.actuelQuestIndex].answers[index].points > 0) {
          this.maxPointPotential += this.data[this.actuelQuestIndex].answers[index].points
        }
      }

      if (this.selectionedQuest[0]) {
        this.point += this.data[this.actuelQuestIndex].answers[0].points;
      }
      if (this.selectionedQuest[1]) {
        this.point += this.data[this.actuelQuestIndex].answers[1].points;
      }
      if (this.selectionedQuest[2]) {
        this.point += this.data[this.actuelQuestIndex].answers[2].points;
      }
      if (this.selectionedQuest[3]) {
        this.point += this.data[this.actuelQuestIndex].answers[3].points;
      }

      if (this.point < 0) {
        this.point = 0;
      }

      this.selectionedQuest = [false, false, false, false];

      this.questRestante--;
      if (this.questRestante>0) {
        this.getRandomQuestion();
      }
    }
  }
}
