import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContentComponent } from './content.component';
import { CardModule } from './card/card.module';
import { CardMainModule } from './card-main/card-main.module';
import { CardFiveDaysModule } from "./card-five-days/card-five-days.module";

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    CardMainModule,
    CardFiveDaysModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ContentComponent,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatProgressSpinnerModule
  ]
})

export class ContentModule { }
