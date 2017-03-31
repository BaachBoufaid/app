import { Component, ViewChild } from '@angular/core';

import { Page2 } from '../page2/page2';
import { Nav } from 'ionic-angular';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {

  @ViewChild(Nav) nav: Nav;
  constructor() {
    this.nav.setRoot(Page2.page2);
  }

}
