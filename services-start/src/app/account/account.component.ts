import { Component, Input } from '@angular/core';

import { LoggingService } from './../services/login.service';
import { AccountService } from './../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(
    private loggingService: LoggingService,
    private accService: AccountService
  ) {
    
  }

  onSetTo(status: string) {
    this.accService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
  }
}
