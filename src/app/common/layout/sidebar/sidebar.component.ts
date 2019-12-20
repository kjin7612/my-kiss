import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';


/*

import { NbSidebarService } from '@nebular/theme';
*/

@Component({
  selector: 'kiss-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private sidebarService: NbSidebarService) {
  }

  toggle() {
    this.sidebarService.toggle();
  }
}
