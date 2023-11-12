import { Component } from '@angular/core';
import { LanguageService } from 'src/app/@Appservice/language/language.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  
  constructor(public languageService: LanguageService,) { 
  }

}