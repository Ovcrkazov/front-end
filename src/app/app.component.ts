import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutageService } from './routage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public obser: Observable<string>;
  public routageService: RoutageService;
  constructor(private rS: RoutageService) {
    this.obser = rS.getPageObser();
    this.routageService = rS;
  }
}
