import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrActionPageRoutingModule } from './qr-action-routing.module';

import { QrActionPage } from './qr-action.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrActionPageRoutingModule
  ],
  declarations: [QrActionPage]
})
export class QrActionPageModule {}
