import { Component } from '@angular/core';
import { RoutageService } from 'src/app/routage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  routage: RoutageService;

  constructor(private rS: RoutageService) {
    this.routage = rS;
  }
}
