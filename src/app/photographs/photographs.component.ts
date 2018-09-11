import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { PhotographsService } from '../photographs.service';

@Component({
  selector: 'app-photographs',
  templateUrl: './photographs.component.html',
  styleUrls: ['./photographs.component.scss']
})
export class PhotographsComponent implements OnInit {

  private urlKartina: string;
  private filters: Array<string> = new Array<string>();
  private tabPhoto: Array<any> = new Array<any>();
  private nbResult : number;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  
  constructor(private router : Router, private photoService : PhotographsService) {
    this.urlKartina = this.router.url;
    for (let index = 0; index < this.photoService.allPhotos.length; index++) {
      this.tabPhoto.push(this.photoService.allPhotos[index]);  
    }
    this.nbResult = this.photoService.allPhotos.length;
  }

  ngOnInit() {
  }

  onActivate(eventValue: any) {
    this.urlKartina = eventValue.urlKartina;
  }

  ngDoCheck(){
    this.urlKartina = this.router.url;
    console.log(this.filters);
  }

  addFilters(eventValue: Array<string>) {
    this.filters = eventValue;
  }
}
