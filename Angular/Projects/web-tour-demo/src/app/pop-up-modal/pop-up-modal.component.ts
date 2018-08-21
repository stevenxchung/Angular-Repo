import { Component, OnInit } from '@angular/core';
import { NavTips } from '../nav-tips';
import { NavHeaders } from '../nav-tips';
import { NavElements } from '../nav-tips';

@Component({
  selector: 'app-pop-up-modal',
  templateUrl: './pop-up-modal.component.html',
  styleUrls: ['./pop-up-modal.component.css']
})
export class PopUpModalComponent implements OnInit {
  navTips: Array<any> = NavTips;
  navHeaders: Array<any> = NavHeaders;
  navElements: Array<any> = NavElements;
  index: number = 0;

  constructor() {}

  ngOnInit() {}

  previous() {
    if (this.index < this.navTips.length && this.index > 0) {
      this.index -= 1;
    }
  }

  next() {
    if (this.index < this.navTips.length - 1) {
      this.index += 1;
    }
  }

  focus() {
    document.getElementById(this.navElements[this.index]).focus();
  }
}
