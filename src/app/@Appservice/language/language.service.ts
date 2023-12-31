import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ThemeService } from '../theme/theme.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLanguageSubject!: BehaviorSubject<string>;
  public currentLanguage!: Observable<string>;

  constructor(
    public translateService: TranslateService,
    @Inject(PLATFORM_ID) platformId: string,
    public translate: TranslateService, private themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document, private router: Router, 
  ) {
    if (isPlatformBrowser(platformId)) {
      this.currentLanguageSubject = new BehaviorSubject<string>(
        localStorage.getItem('jpr-lang')!
      );

      this.currentLanguage = this.currentLanguageSubject.asObservable();

      if (!localStorage.getItem('jpr-lang')) {
        localStorage.setItem('jpr-lang','en');
        this.currentLanguageSubject.next('en');
        this.changeLanguageService('en',false)
      }
      else{        
        this.changeLanguageService(this.currentLanguageSubject.value,true)
      }
    }
  }

  public get lang(): string {
    return this.currentLanguageSubject.value;
  }

  changeLanguageService(lang: string, frmLocalStorage: boolean) {
    let html = this.document.getElementsByTagName('html')[0] as HTMLElement;
    html.dir = (lang === 'en') ? 'ltr' : 'rtl';
    this.translate.use(lang);
    this.updateLanguage(lang);
  }

  updateLanguage(language: string) {
    localStorage.setItem('jpr-lang', language);
    this.currentLanguageSubject.next(language);
  }
}
