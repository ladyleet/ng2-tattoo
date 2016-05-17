import { Component, OnInit } from '@angular/core';
import { MdButton } from '@angular2-material/button';
import { MdCard } from '@angular2-material/card';

@Component({
  moduleId: module.id,
  selector: 'click-things',
  templateUrl: 'click-things.component.html',
  styleUrls: ['click-things.component.css'],
  directives: [MdButton, MdCard]
})
export class ClickThingsComponent implements OnInit {
    n: number = 0;

    increment() {
      this.n ++;
    }

  constructor() {}

  ngOnInit() {
  }

}
