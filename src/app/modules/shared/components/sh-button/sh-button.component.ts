import { Component, Input } from '@angular/core'

type ColorButton = 'primary' | 'error' | 'success' | 'warning' | 'info' | 'link'

type IconPosition = 'left' | 'right'

@Component({
  selector: 'sh-button',
  templateUrl: './sh-button.component.html',
  styleUrls: ['./sh-button.component.scss']
})
export class ShButtonComponent {
  @Input() text: string = ''
  @Input() color: ColorButton = 'primary'
  @Input() icon?: string
  @Input() IconPosition?: IconPosition

  get verifySide () {
    return this.IconPosition === 'left' ? 'row' : 'row-reverse'
  }
}
