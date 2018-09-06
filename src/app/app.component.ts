import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kartina';
  urlKartina: string;
  breadcrumb: Array<string> = new Array<string>();

  onActivate(eventValue: any) {
    this.breadcrumb = [];
    if (eventValue.urlKartina !== undefined) {
      this.urlKartina = eventValue.urlKartina.substring(1);
      let newUrl: string = "";
      let firstLetterWord: boolean = true;
      for (let index = 0; index < this.urlKartina.length; index++) {
        if (this.urlKartina.charAt(index) === '/') {
          this.breadcrumb.push(newUrl);
          firstLetterWord = true;
          newUrl = "";
        } else if (firstLetterWord === true) {
          newUrl += this.urlKartina.charAt(index).toUpperCase();
          firstLetterWord = false;
        } else {
          newUrl += this.urlKartina.charAt(index);
        }
      }
      this.breadcrumb.push(newUrl);
    }
  }
}
