import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ContentComponent } from './content.component';
import { ContentServise } from './content.service';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
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
  ],
  providers: [ ContentServise ]
})

export class ContentModule { }
