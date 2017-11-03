import { 
  Component, 
  OnInit, 
  Input,
  ContentChild,
  ElementRef } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;
  @ContentChild('contentParagraph') paragraph: ElementRef

  constructor() { }

  ngOnInit() {

  }

  ngAfterContentInit() {
    console.log(this.paragraph.nativeElement.textContent);
  }

}
