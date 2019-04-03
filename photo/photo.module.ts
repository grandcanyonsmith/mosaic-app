import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PhotoPage } from './photo.page';
import { ActionSheetComponent } from '../action-sheet/action-sheet.component';

const routes: Routes = [
  {
    path: '',
    component: PhotoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    // ActionSheetComponent
  ],
  declarations: [PhotoPage]
})
export class PhotoPageModule {}
