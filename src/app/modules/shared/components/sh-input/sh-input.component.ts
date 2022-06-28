import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms'
import { Component, Input, OnDestroy, OnInit } from '@angular/core'

import { Subscription } from 'rxjs'

type InputType = 'text' | 'number' | 'password' | 'email' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'url' | 'search' | 'tel' | 'color'

@Component({
  selector: 'sh-input',
  templateUrl: './sh-input.component.html',
  styleUrls: ['./sh-input.component.scss']
})
export class ShInputComponent implements OnInit, OnDestroy {
  @Input() label: string = ''
  @Input() placeholder: string = ''
  @Input() type: InputType = 'text'
  @Input() controlName: string = ''
  @Input() control!: AbstractControl

  public inputForm: FormGroup
  private subscribe: Subscription = Subscription.EMPTY

  constructor (private readonly formBuilder:FormBuilder) {
    this.inputForm = this.formBuilder.group({ input: undefined })
  }

  ngOnInit (): void {
    this.subscribe = this.inputForm.valueChanges.subscribe(({ input }: {input: string}) => {
      this.control.setValue(input)
    })
  }

  ngOnDestroy (): void {
    this.subscribe.unsubscribe()
  }
}
