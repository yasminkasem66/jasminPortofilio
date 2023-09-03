import { Component, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './@Appservice/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jasminPortofilio';
  darkMode = signal<boolean>(false);

  constructor(translate: TranslateService, private themeService: ThemeService){
    
  }

 
  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  getCurrentTheme() {
    console.log(this.themeService.getCurrentTheme());
    
    return this.themeService.getCurrentTheme();
  }
}
