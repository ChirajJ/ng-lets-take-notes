import { Injectable } from '@angular/core';
import { Overlay, OverlayRef, GlobalPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { BehaviorSubject } from 'rxjs';

import { LoaderComponent } from '../shared/components/loader/loader.component';
import { INavigation } from '../models/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  loaderPortal: ComponentPortal<LoaderComponent>;
  overlayRef: OverlayRef;
  navList: INavigation[] = [
    {
      title: 'Login',
      route: '/login'
    }
  ];
  navMainList: INavigation[] = [
    {
      title: 'Notebooks',
      route: '/ltn-app/notebooks'
    },
    {
      title: 'Logout',
      route: '/logout'
    }
  ];
  navSubject: BehaviorSubject<INavigation[]>;

  constructor(private authService: AuthService, private overlay: Overlay) {

    console.log('Shared Service invoked...');
    if (this.authService.isLoggedIn()) {
      this.navSubject = new BehaviorSubject<INavigation[]>(this.navMainList);
    } else {
      this.navSubject = new BehaviorSubject<INavigation[]>(this.navList);
    }
  }

  toggleNavList(): void {

    (this.authService.isLoggedIn()) ? this.navSubject.next(this.navMainList) : this.navSubject.next(this.navList);
  }

  login(email: string, pswd: string): Promise<boolean> {

    return new Promise ( (resovle, reject) => {
      this.startLoader();
      setTimeout( () => {
        this.authService.authenticate(email, pswd)
        .subscribe(
          (res) => {
            this.authService.login(res.token);
            this.stopLoader();
            this.toggleNavList();
            console.log('=====><><>', res);
            resovle(res);
          },
          (err) => {
            this.stopLoader();
            // this.loginMsgStatus = true;
            console.log('Error', err);
            reject(err);
          }
        );
      }, 1500);
    });
  }

  logout(): void {

    this.startLoader();
    setTimeout(() => {
      this.stopLoader();
      this.authService.logout();
      this.toggleNavList();
    }, 1000);
  }

  initLoader(loaderPortal: ComponentPortal<LoaderComponent>): void {

    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      backdropClass: 'backdrop-color',
      hasBackdrop: true
    });
    this.loaderPortal = loaderPortal;
  }

  initNavList(): BehaviorSubject<INavigation[]> {
    return this.navSubject;
  }

  startLoader(): void {
    this.overlayRef.attach(this.loaderPortal);
  }

  stopLoader(): void {
    this.overlayRef.detach();
  }

}
