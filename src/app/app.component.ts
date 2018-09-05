import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kartina';
  urlKartina : string = "LL";

  onRatingUrlKartinaChanged(eventValue :string) {
    this.urlKartina = eventValue;
  }
}
