import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

   isDarkMode$: BehaviorSubject<boolean>= new BehaviorSubject<boolean>(true);

  toggleDarkMode() {
    this.isDarkMode$.next(!this.isDarkMode$.value);
    this.updateTheme();
  }

  getCurrentTheme() {
    return this.isDarkMode$.value===true ? 'dark' : 'light';
  }

   updateTheme() {
    if (this.isDarkMode$.value) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }
}
