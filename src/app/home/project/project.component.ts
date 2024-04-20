import { Component, ElementRef, Injector, OnInit, ViewChild, effect, inject } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from 'src/app/@Appservice/language/language.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  injector = inject(Injector);
  languageService = inject(LanguageService);

  customOptions: OwlOptions = {
    stagePadding: 0,
    margin: 0,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 1000,
    items: 1,
    autoplay: true,
    rtl: (this.languageService.getCurrentLanguage()) === 'ar',
    autoWidth: true
  }

  language: string = this.languageService.getCurrentLanguage();


  ngOnInit(): void {
    effect(() => {
      this.language = this.languageService.getCurrentLanguage();
      this.customOptions.rtl = (this.languageService.getCurrentLanguage()) === 'ar';
    }, { injector: this.injector });
  }

  @ViewChild('imgContainer') imgContainer!: ElementRef;

}
