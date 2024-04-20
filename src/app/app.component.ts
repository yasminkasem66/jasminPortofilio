import { Component, OnInit, inject, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './@Appservice/theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private themeService = inject(ThemeService);

  title = 'jasminPortofilio';
  darkMode = signal<boolean>(false);
  isLoading: boolean = true;


  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 4000);
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  getCurrentTheme() {
    return this.themeService.getCurrentTheme();
  }
}
