import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(
    private serversService: ServersService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(id: number) {
    //relative to active route
    // this.router.navigate(['servers'], {relativeTo: this.route});
    this.router.navigate(['servers', id, 'edit'], {queryParams: {allowEdit: 1}, fragment: 'test'});
  }

}
