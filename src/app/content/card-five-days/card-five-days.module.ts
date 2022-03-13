import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardFiveDaysComponent } from './card-five-days.component';

@NgModule({
  declarations: [
    CardFiveDaysComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule
  ],
  exports: [
    MatCardModule,
    MatProgressSpinnerModule,
    CardFiveDaysComponent
  ],
  providers: [],
})
export class CardFiveDaysModule {}
