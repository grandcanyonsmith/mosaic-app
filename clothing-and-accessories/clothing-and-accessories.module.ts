import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { Tab2Page } from '../tab2/tab2.page'

import { IonicModule } from '@ionic/angular';

import { ClothingAndAccessoriesPage } from './clothing-and-accessories.page';
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: ClothingAndAccessoriesPage
  },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forRoot([
      {
        path: 'app-tab2',
        component: Tab2Page
      }
    ])
  ],
  declarations: [ClothingAndAccessoriesPage]
})
export class ClothingAndAccessoriesPageModule {}
