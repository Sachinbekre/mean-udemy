import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

import {MatExpansionModule} from '@angular/material/expansion';

const COMMON_MODULE =[
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatExpansionModule
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...COMMON_MODULE
  ],
  exports:[
    ...COMMON_MODULE
  ]
})
export class SharedModule { }
