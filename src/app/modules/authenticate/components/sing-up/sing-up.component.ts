import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormControl, FormGroup } from '@angular/forms'

import { AuthenticateService } from '../../authenticate.service'

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {
  public singUpForm: FormGroup

  constructor (
    private readonly formBuilder: FormBuilder,
    private readonly authenticateService: AuthenticateService
  ) {
    this.singUpForm = this.formBuilder.group({
      name: undefined,
      email: undefined,
      password: undefined
    })
  }

  ngOnInit (): void {
  }

  public onSubmit () {
    const formValue = this.singUpForm.value

    this.authenticateService.singUp(formValue).subscribe(singUpResponse => {
      console.log(singUpResponse)
    })
  }

  get nameControl () {
    const control = this.singUpForm.get('name') as FormControl

    if (!control) {
      throw new Error('Not found name in singInForm')
    }

    return control
  }

  get emailControl () {
    const control = this.singUpForm.get('email') as FormControl

    if (!control) {
      throw new Error('Not found email in singInForm')
    }

    return control
  }

  get passwordControl () {
    const control = this.singUpForm.get('password') as FormControl

    if (!control) {
      throw new Error('Not found password in singInForm')
    }

    return control
  }
}
