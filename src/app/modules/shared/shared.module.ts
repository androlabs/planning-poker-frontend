import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { MatIconModule } from '@angular/material/icon'
import { ShButtonComponent } from './components/sh-button/sh-button.component'
import { ShInputComponent } from './components/sh-input/sh-input.component'

@NgModule({
  declarations: [
    ShButtonComponent,
    ShInputComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ShButtonComponent,
    ShInputComponent
  ]
})
export class SharedModule { }
