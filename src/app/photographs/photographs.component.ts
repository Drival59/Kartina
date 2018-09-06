import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-photographs',
  templateUrl: './photographs.component.html',
  styleUrls: ['./photographs.component.scss']
})
export class PhotographsComponent implements OnInit {

  private urlKartina: string;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  
  private tabPhoto: Array<number> = new Array<number>();

  constructor(private router : Router) {
    this.urlKartina = this.router.url;
    for (let index = 0; index < 24; index++) {
      this.tabPhoto.push(index);
    }
  }

  ngOnInit() {
  }

}
