import { RouterModule, Routes } from '@angular/router'

import { NgModule } from '@angular/core'
import { SingInComponent } from './components/sing-in/sing-in.component'

const routes: Routes = [
  {
    path: '',
    component: SingInComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthenticateRoutingModule {}
