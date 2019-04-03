import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LandingPage1Page } from './landing-page1.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPage1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LandingPage1Page]
})
export class LandingPage1PageModule {}


// import React, { Component } from 'react';

// export  default class LandingPage1Page extends Component {

//   render() {
//     return(
//       alert('hello')
//     );
//   }
// }

