import { Component, OnInit } from '@angular/core';
import { NavItemComponent } from './../nav-item/nav-item.component';

@Component({
  moduleId: module.id,
  selector: 'nav-bar',
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.css'],
  directives: [NavItemComponent]
})
export class NavBarComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}
