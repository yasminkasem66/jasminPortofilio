import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './banner/banner.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home.component';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { TabComponent } from './experience/tabs-group/tab/tab.component';
import { TabsGroupComponent } from './experience/tabs-group/tabs-group.component';
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    BannerComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    ExperienceComponent,
    TabComponent,
    TabsGroupComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule.forChild({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
  ]
})
export class HomeModule { }
