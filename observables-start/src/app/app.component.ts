import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user1Activ = false;
  user2Activ = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.userActivated.subscribe((userId) => {
      if (userId == 1) {
        this.user1Activ = true;
      } else if (userId == 2) {
        this.user2Activ = true;
      }
    });
  }

}
