import { Component, EventEmitter, Input, Output } from '@angular/core'

type InputType = 'text' | 'number' | 'password' | 'email' | 'date' | 'time' | 'datetime-local' | 'month' | 'week' | 'url' | 'search' | 'tel' | 'color'

@Component({
  selector: 'sh-input',
  templateUrl: './sh-input.component.html',
  styleUrls: ['./sh-input.component.scss']
})
export class ShInputComponent {
  @Input() label: string = ''
  @Input() placeholder: string = ''
  @Input() type: InputType = 'text'
  @Input() controlName: string = ''

  @Output() onChangeEvent = new EventEmitter<Event>()

  public onChange (event: Event) {
    this.onChangeEvent.emit(event)
  }
}
