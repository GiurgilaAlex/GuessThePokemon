import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { StartPageComponent } from './start-page/start-page.component';
import { StartRoutingModule } from './start-routing.module';

@NgModule({
  declarations: [StartPageComponent],
  imports: [
    CommonModule,
    StartRoutingModule,
    MatButtonModule
  ]
})
export class StartModule { }
