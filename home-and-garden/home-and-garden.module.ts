import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeAndGardenPage } from './home-and-garden.page';

const routes: Routes = [
  {
    path: '',
    component: HomeAndGardenPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeAndGardenPage]
})
export class HomeAndGardenPageModule {}
