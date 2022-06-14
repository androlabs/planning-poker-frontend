import { AuthenticateRoutingModule } from './authenticate-routing.module'
import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SharedModule } from '../shared/shared.module'
import { SingInComponent } from './components/sing-in/sing-in.component'

@NgModule({
  declarations: [
    SingInComponent
  ],
  imports: [
    CommonModule,
    AuthenticateRoutingModule,
    SharedModule
  ]
})
export class AuthenticateModule { }
