import { RouterModule, Routes } from '@angular/router'

import { NgModule } from '@angular/core'
import { SingInComponent } from './components/sing-in/sing-in.component'
import { SingUpComponent } from './components/sing-up/sing-up.component'

const routes: Routes = [
  {
    path: '',
    component: SingInComponent
  }, {
    path: 'sing-up',
    component: SingUpComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthenticateRoutingModule {}
