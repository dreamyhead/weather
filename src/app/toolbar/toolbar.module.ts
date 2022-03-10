import { NgModule } from '@angular/core';


import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarService } from './toolbar.service';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule
  ],

  exports: [
    ToolbarComponent,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ ToolbarService ]
})

export class ToolbarModule { }
