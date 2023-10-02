import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

const routerOptions: ExtraOptions={
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled'
}

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
