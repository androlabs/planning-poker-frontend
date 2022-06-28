import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

import { AuthenticateService } from './../../authenticate.service'

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.scss']
})
export class SingInComponent implements OnInit {
  public singInForm: FormGroup

  constructor (
    private readonly formBuilder: FormBuilder,
    private readonly authenticateService:AuthenticateService
  ) {
    this.singInForm = this.formBuilder.group({
      email: undefined,
      password: undefined
    })
  }

  ngOnInit (): void {}

  public onSubmit () {
    const formValue = this.singInForm.value

    this.authenticateService.singIn(formValue).subscribe(singInResponse => {
      console.log(singInResponse)
    })
  }

  get emailControl () {
    const control = this.singInForm.get('email') as FormControl

    if (!control) {
      throw new Error('Not found email in singInForm')
    }

    return control
  }

  get passwordControl () {
    const control = this.singInForm.get('password') as FormControl

    if (!control) {
      throw new Error('Not found password in singInForm')
    }

    return control
  }
}
