import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const route       = this.route;
    const routeParams = route.params;
    const serverId    = route.snapshot.params.id;
    const idAsNumber  = parseInt(serverId);
    console.log(idAsNumber);
    this.server = this.serversService.getServer(idAsNumber);
    routeParams.subscribe((params) => {
      const serverId = params.id;
      const idAsNumber  = parseInt(serverId);
      this.server = this.serversService.getServer(idAsNumber);
    });
  }

}
