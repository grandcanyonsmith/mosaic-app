import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  // { path: 'app2.page', loadChildren: './tabs2/tabs2.page.module#Tabs2PageModule' },
  { path: 'test', loadChildren: './test/test.module#TestPageModule' },
  { path: 'walkthrough', loadChildren: './walkthrough/walkthrough.module#WalkthroughPageModule' },
  { path: 'landing-page1', loadChildren: './landing-page/landing-page1/landing-page1.module#LandingPage1PageModule' },
  { path: 'landing-page2', loadChildren: './landing-page2/landing-page2.module#LandingPage2PageModule' },
  { path: 'home-and-garden', loadChildren: './home-and-garden/home-and-garden.module#HomeAndGardenPageModule' },
  { path: 'clothing-and-accessories', loadChildren: './clothing-and-accessories/clothing-and-accessories.module#ClothingAndAccessoriesPageModule' },
  { path: 'photo', loadChildren: './photo/photo.module#PhotoPageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
