import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentServise } from './content.service';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    MatCardModule,
    CommonModule
  ],
  exports: [
    ContentComponent,
    MatCardModule
  ],
  providers: [ ContentServise ]
})

export class ContentModule { }
