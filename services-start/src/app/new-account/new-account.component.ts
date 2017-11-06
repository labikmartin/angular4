import { Component } from '@angular/core';

import { AccountService } from './../services/account.service';
import {LoggingService} from '../services/login.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(
    private loggingService: LoggingService,
    private accService: AccountService  
  ) {
    
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);
  }
}
