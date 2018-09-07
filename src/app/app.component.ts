import { Component } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kartina';
  urlKartina: string;
  breadcrumb: Array<string> = new Array<string>();
  faSpinner = faSpinner;
  loading: boolean = false;

  onActivate(eventValue: any) {
    this.breadcrumb = [];
    let newUrl: string = "";
    if (eventValue.urlKartina !== undefined) {
      this.urlKartina = eventValue.urlKartina.substring(1);
      let firstLetterWord: boolean = true;
      for (let index = 0; index < this.urlKartina.length; index++) {
        if (this.urlKartina.charAt(index) === '/') {
          this.breadcrumb.push(newUrl);
          firstLetterWord = true;
          newUrl = "";
        } else if (firstLetterWord === true) {
          newUrl += this.urlKartina.charAt(index).toUpperCase();
          firstLetterWord = false;
        } else if(this.urlKartina.charAt(index) === '_') {
          newUrl += " ";
          firstLetterWord = true;
        } else {
          newUrl += this.urlKartina.charAt(index);
        }
      }
      this.breadcrumb.push(newUrl);    
    }
  }

  simulateLoading() {
    this.loading = true;
    window.scroll(0, 0);
    setTimeout(() => {
      this.loading = false;
    }, 500);
  }

  onEmitLoadingChanges(eventValue: boolean) {
    this.loading = eventValue;
  }
}
