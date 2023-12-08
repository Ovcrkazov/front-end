import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutageService {
  private pageSubject = new BehaviorSubject<string>("home");

  changePage(page: string) {
    this.pageSubject.next(page)
    if (page !== "tetris" && window.location.origin + "/" !== window.location.href) {
    window.location.replace(window.location.origin)
    }
  }

  getPageObser()  {
    return this.pageSubject.asObservable();
  }
}
