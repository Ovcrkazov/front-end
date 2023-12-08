import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { RoutageService } from './routage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public lienImage: string = "https://assets.ovcrkazov.fr/images/logo.png";
  public count:number = 0;
  public obser: Observable<string>;
  public routageService: RoutageService;
  constructor(private rS: RoutageService) {
    this.obser = rS.getPageObser();
    this.routageService = rS;
    if (window.location.pathname !== "/") {
      this.routageService.changePage("tetris")
    }
  }
  addCharlie(){
    if (this.count === 30) {
      this.lienImage = "https://assets.ovcrkazov.fr/images/titouan.png"
    }
    else{
      this.count++;
    }
  }
}
