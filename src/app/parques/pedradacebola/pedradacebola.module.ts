import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PedradacebolaPageRoutingModule } from './pedradacebola-routing.module';

import { PedradacebolaPage } from './pedradacebola.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PedradacebolaPageRoutingModule
  ],
  declarations: [PedradacebolaPage]
})
export class PedradacebolaPageModule {}
