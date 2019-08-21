import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';
// import { TypePageModule } from 'src/app/type/type.module';
// import { TypePage } from '../type/type.page';







const routes: Routes = [
  {
    path: '',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // TypePageModule,
    // RouterModule.forChild(routes),
    RouterModule.forChild([{ path: '', component: HomePage }])
    
  ],
  // entryComponents: [TypePage],
  declarations: [HomePage,]
})

export class HomePageModule {}
