import { CommonModule } from '@angular/common'
import { MatIconModule } from '@angular/material/icon'
import { NgModule } from '@angular/core'
import { ShButtonComponent } from './components/sh-button/sh-button.component'

@NgModule({
  declarations: [
    ShButtonComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    ShButtonComponent
  ]
})
export class SharedModule { }
