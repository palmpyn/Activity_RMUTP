import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';

// import { HomePageModule } from 'src/app/modules/home/home.module';
// import { SettingsPageModule } from 'src/app/modules/settings/settings.module';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    // HomePageModule,
    // SettingsPageModule,
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
