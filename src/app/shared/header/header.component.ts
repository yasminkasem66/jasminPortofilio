import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/@Appservice/theme/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(translate: TranslateService, private themeService: ThemeService){
    
  }

 
  getCurrentTheme() {
    console.log( this.themeService.getCurrentTheme());
    
    return this.themeService.getCurrentTheme();
  }
}
