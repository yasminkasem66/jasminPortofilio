import {
  Component,
  ElementRef,
  Inject,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ThemeService } from 'src/app/@Appservice/theme/theme.service';
import { Router, RouterModule } from '@angular/router';
import { LanguageService } from 'src/app/@Appservice/language/language.service';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, TranslateModule, RouterModule],
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
  @ViewChild('langMenu') langMenu!: ElementRef<HTMLDivElement>;
  isLangMenuShown=false;

  constructor(
    public translate: TranslateService,
    private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    public languageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: string,
    private renderer2: Renderer2
  ) {
    if (isPlatformBrowser(platformId)) {
      this.changeLanguage(localStorage.getItem('jpr-lang')!, true);

      this.themeService.isDarkMode$.subscribe((theme) => {
        this.themeService.updateTheme();
      });
    }
  }

  downloadCV() {
    this.translate.get('Header.cvName').subscribe((val) => {
      window.open('assets/cv/' + val, '_blank');
    });
  }

  changeLanguage(lang: string, frmLocalStorage: boolean) {
    this.languageService.changeLanguageService(lang, frmLocalStorage);
    if (lang === 'en') {
      this.src = '/assets/images/united-states.svg';
      this.alt = 'English';
    } else {
      this.src = '/assets/images/egypt.svg';
      this.alt = 'Arabic';
    }
    // this.langMenu
    // ? this.renderer2.addClass(this.langMenu.nativeElement, '!hidden')
    // : '';
   }

  toggleTheme() {
    this.themeService.toggleDarkMode();
  }

  goToSection(fragment: string) {
    this.router.navigateByUrl('#' + fragment);
  }

}
