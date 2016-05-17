import { Component } from '@angular/core';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ClickThingsComponent } from './click-things/click-things.component';

@Component({
  moduleId: module.id,
  selector: 'ng-tattoo-app',
  templateUrl: 'ng-tattoo.component.html',
  styleUrls: ['ng-tattoo.component.css'],
  directives: [NavBarComponent, ClickThingsComponent]
})
export class NgTattooAppComponent {
  title = 'Hello this is ng-tattoo!';
}
