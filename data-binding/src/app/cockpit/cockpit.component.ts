import { 
  Component, 
  OnInit, 
  EventEmitter, 
  Output, 
  ViewChild, 
  ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('srvCreated') serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('serverNameInput') serverNameInput: ElementRef;
  @ViewChild('serverContentInput') serverContentInput: ElementRef;
  // newServerName = '';
  // newServerContent = '';

  constructor() {

  }

  ngOnInit() {

  }

  // EVENTS

  onAddServer() {
    let name = this.serverNameInput.nativeElement.value;
    let desc = this.serverContentInput.nativeElement.value;
    this.serverCreated.emit({
      serverName: name, 
      serverContent: desc
    });
  }

  onAddBlueprint() {
    let name = this.serverNameInput.nativeElement.value;
    let desc = this.serverContentInput.nativeElement.value;
    this.blueprintCreated.emit({
      serverName: name, 
      serverContent: desc
    });
  }

}
