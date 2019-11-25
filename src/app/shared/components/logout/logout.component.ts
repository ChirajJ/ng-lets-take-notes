import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private sharedService: SharedService) {
    this.sharedService.logout();
  }

  ngOnInit() {
  }

}
