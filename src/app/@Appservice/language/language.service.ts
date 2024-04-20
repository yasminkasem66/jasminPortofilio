import { Inject, Injectable, PLATFORM_ID, WritableSignal, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ThemeService } from '../theme/theme.service';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
private currentLanguageSignal: WritableSignal<string>  = signal(localStorage.getItem('jpr-lang')!);
 
  constructor(
    @Inject(PLATFORM_ID) platformId: string,
    public translate: TranslateService, 
    @Inject(DOCUMENT) private document: Document,
  ) {
    if (isPlatformBrowser(platformId)) {
      if (!localStorage.getItem('jpr-lang')) {
        this.updateCurrentLanguage('en');
         this.changeLanguageService('en',false)
      }
      else{        
        this.changeLanguageService( this.currentLanguageSignal(),true)
      }
    }
  }

  updateCurrentLanguage(lang: string) {    
    localStorage.setItem('jpr-lang',lang);
    this.currentLanguageSignal.set(lang);    
  }

  getCurrentLanguage() {
    return this.currentLanguageSignal();
  }

  changeLanguageService(lang: string, frmLocalStorage: boolean) {
    let html = this.document.getElementsByTagName('html')[0] as HTMLElement;
    html.dir = (lang === 'en') ? 'ltr' : 'rtl';
    this.translate.use(lang);
    this.updateCurrentLanguage(lang);
  }

}
