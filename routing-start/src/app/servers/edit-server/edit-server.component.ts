import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {
  server: {id: number, name: string, status: string};
  serverName = '';
  serverStatus = '';

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const route = this.route;
    // snapshot params
    // console.log(route.snapshot.queryParams);
    // console.log(route.snapshot.fragment);
    // listen to params change
    route.queryParams.subscribe((queryParams) => {
      // console.log(queryParams);
    });
    route.fragment.subscribe((fragment) => {
      // console.log(fragment);
    });
    this.server = this.serversService.getServer(1);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
  }

}
