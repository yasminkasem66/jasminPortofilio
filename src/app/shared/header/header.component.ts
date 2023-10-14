import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/@Appservice/theme/theme.service';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from 'src/app/@Appservice/language/language.service';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
 
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule,RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('animateMenu', [
      transition(':enter', [
        query('*', [
          style({ opacity: 0, transform: 'translateY(-50%)' }),
          stagger(50, [
            animate(
              '250ms cubic-bezier(0.35, 0, 0.25, 1)',
              style({ opacity: 1, transform: 'none' })
            ),
          ]),
        ]),
      ]),
    ]),
  ],
})
export class HeaderComponent {

  src: string = '../../../assets/images/united-states.svg';
  alt: string = 'English';

  constructor(public translate: TranslateService, private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,private router: Router,public languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: string,
   ) {
    // if (isPlatformBrowser(platformId)) {
    //   this.languageService.currentLanguage.subscribe((language) => {
    //     this.changeLanguage(language, true);
    //   });
    // }
    if (isPlatformBrowser(platformId)) {
      this.themeService.isDarkMode$.subscribe((theme) => {
        this.themeService.updateTheme();
      });
    }
  }


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
    html.dir = lang === 'en' ? 'ltr' : 'rtl';
    this.translate.setDefaultLang(lang);
    let curentUrl = this.router.url;
    if (frmLocalStorage === false) {
      this.languageService.updateLanguage(lang);
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate([curentUrl]);
      });
    }
    this.languageService.updateLanguage(lang);
    if (lang === 'en') {
      this.src = '../../../assets/images/united-states.svg';
      this.alt = 'English';
    } else {
      this.src = '../../../assets/images/egypt.svg';
      this.alt = 'Arabic';
    }
  }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  goToSection(fragment: string) {
   this.router.navigateByUrl('#'+fragment)
  }

}
