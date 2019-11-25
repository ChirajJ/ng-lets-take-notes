import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay } from '@angular/cdk/overlay';

import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { SharedService } from './services/shared.service';
import { INavigation } from './models/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

  title = 'ng-lets-take-notes';
  navList: INavigation[];

  constructor(private authService: AuthService, private sharedService: SharedService) {}

  ngOnInit(): void {
    console.log('On Init');
    this.sharedService.initNavList()
    .subscribe({
      next: (value: INavigation[]) => this.navList = value
    });
  }

  ngAfterViewInit() {
    console.log('After view Init');
    const componentPortal = new ComponentPortal(LoaderComponent);
    this.sharedService.initLoader(componentPortal);
  }

  ngOnDestroy() {
    this.sharedService.initNavList().unsubscribe();
  }

}
