
import {
  Component,
  Output,
  EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrl: 
})


export class HeaderComponent {

  @Output() linkSelected = new EventEmitter<string>();

  onNavClick(link: string) {
    this.linkSelected.emit(link);
  }

}
