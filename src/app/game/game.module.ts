import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { GamePageComponent } from './game-page/game-page.component';
import { GameRoutingModule } from './game-routing.module';

@NgModule({
  declarations: [GamePageComponent],
  imports: [
    CommonModule,
    GameRoutingModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class GameModule { }
