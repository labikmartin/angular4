import { Response } from '@angular/http';
import { Component, OnInit } from '@angular/core';

import { ServerService } from 'app/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  servers = [
    {
      name: 'Testserver',
      capacity: 10,
      id: this.generateId()
    },
    {
      name: 'Liveserver',
      capacity: 100,
      id: this.generateId()
    }
  ];
  fetchedServers: any[];
  testAsyncPipe = this.serverService.usingPipeAsync();

  constructor(private serverService: ServerService) {}

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onSaveServers() {
    this.serverService.postServers(this.servers, (response: Response) => {
      console.log(response);
      console.log('hello from callback');
    });
  }

  ngOnInit() {
    this.serverService.fetchServers(
      (data: any[]) => {
        this.fetchedServers = data;
        console.log(this.fetchedServers);
      },
      (error) => {
        console.log(error);
      }
    );
  }

}
