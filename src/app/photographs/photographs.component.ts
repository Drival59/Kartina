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
  private filters: Array<string> = new Array<string>();

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  
  constructor(private router : Router) {
    this.urlKartina = this.router.url;
  }

  ngOnInit() {
  }

  onActivate(eventValue: any) {
    this.urlKartina = eventValue.urlKartina;
  }

  ngDoCheck(){
    this.urlKartina = this.router.url;
  }

  addFilters(eventValue: Array<string>) {
    this.filters = eventValue;
  }
}
