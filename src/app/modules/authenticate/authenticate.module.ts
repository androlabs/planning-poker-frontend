import { AuthenticateRoutingModule } from './authenticate-routing.module'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SingInComponent } from './components/sing-in/sing-in.component'

@NgModule({
  declarations: [
    SingInComponent
  ],
  imports: [
    CommonModule,
    AuthenticateRoutingModule
  ]
})
export class AuthenticateModule { }
