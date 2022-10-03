import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToStacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  declarations: [
    StarComponent,
    ConvertToStacesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StarComponent,
    ConvertToStacesPipe,
    FormsModule
  ]
})
export class SharedModule { }
