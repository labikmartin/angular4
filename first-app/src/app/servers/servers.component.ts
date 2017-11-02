import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  // styleUrls: ['./servers.component.css']
  styles: [`
    .offline {
      background-color: red;
    }
    .online {
      background-color: green;
    }
  `]
})
export class ServersComponent implements OnInit {
  
  // COMPONENT PROPS
  servers = [];
  allowNewServer = false;
  serverCreationStatus = [];
  serverName = '';
  serverStatus = 'offline';
  
  constructor(private http: Http) {

  }
  
  // ANGULAR EVENTS

  ngOnInit(): void {
    let self = this;
    this.http
    .get('http://www.mocky.io/v2/59faf803370000234666bb92')
    .subscribe(res => {
      let data = JSON.parse(res['_body']);
      this.servers = data;
    });
  }

  // EVENTS

  onCreateServer() {
    // let servers = this.servers;
    this.serverCreationStatus = this.servers;
    // for (let i = 0; i < servers.length; i++) {
    //   let status = servers[i].status;
    //   this.serverStatus = status == 'online' ? 'green' : 'red' ;
    // }
  }

  onUpdateServerName(event: any) {
    let evt = event,
        tgt = evt.target;
    this.serverName = tgt.value;
  }

  // METHODS

  getServerStatus() {
    return this.serverStatus;
  }

}
