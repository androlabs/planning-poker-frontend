import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { MatIconModule } from '@angular/material/icon'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { ShButtonComponent } from './components/sh-button/sh-button.component'
import { ShInputComponent } from './components/sh-input/sh-input.component'

@NgModule({
  declarations: [
    ShButtonComponent,
    ShInputComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [
    ShButtonComponent,
    ShInputComponent,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
