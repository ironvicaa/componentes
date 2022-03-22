import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputformsPageRoutingModule } from './inputforms-routing.module';

import { InputformsPage } from './inputforms.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputformsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [InputformsPage]
})
export class InputformsPageModule {}
