import { Component, Inject } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/@Appservice/theme/theme.service';
import { Router } from '@angular/router';
import { LanguageService } from 'src/app/@Appservice/language/language.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  src: string = 'https://www.worldometers.info/img/flags/us-flag.gif';
  alt: string = 'English';

  constructor(public translate: TranslateService, private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,    private router: Router,     public languageService: LanguageService,

    ) { }


  downloadCV() {
    this.translate.get('Header.cvName').subscribe((val) => {
       // app url
      let url = this.document.location.href;
      // Open a new window with the CV
      window.open(url+'../../../assets/cv/'+val, '_blank');
    });
  }

  changeLanguage(lang: string, frmLocalStorage: boolean) {
    let html = this.document.getElementsByTagName('html')[0] as HTMLElement;
    html.dir = lang == 'en' ? 'ltr' : 'rtl';
    this.translate.setDefaultLang(lang);

    this.languageService.updateLanguage(lang);
    if (lang == 'en') {
      this.src = 'https://www.worldometers.info/img/flags/us-flag.gif';
      this.alt = 'English';
    } else {
      this.src = 'https://www.worldometers.info/img/flags/eg-flag.gif';
      this.alt = 'Arabic';
    }
  }

}
