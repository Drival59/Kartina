import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { PhotographsService } from '../photographs.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-photographs',
  templateUrl: './photographs.component.html',
  styleUrls: ['./photographs.component.scss']
})
export class PhotographsComponent implements OnInit {

  private urlKartina: string;
  private filtersOrientation: Array<string> = new Array<string>();
  private filtersFormat: Array<string> = new Array<string>();
  private filtersPrice: Array<string> = new Array<string>();
  private tabPhoto: Array<any> = new Array<any>();
  private tabShowPhoto: Array<any> = new Array<any>();
  private nbResult: number;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  constructor(private router: Router, private photoService: PhotographsService) {
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

  ngDoCheck() {
    this.urlKartina = this.router.url;
    this.tabShowPhoto = [];
    if (this.filtersOrientation.length === 0 && this.filtersFormat.length === 0 && this.filtersPrice.length === 0) {
      this.tabShowPhoto = this.tabPhoto;
    } else {
      this.tabPhoto.forEach(photo => {
        this.filtersOrientation.forEach(orientation => {
          if (photo.orientation.includes(orientation)) {
            if (this.filtersFormat.length === 0 && this.filtersPrice.length === 0) {
              this.tabShowPhoto.push(photo);
            } else {
              if (this.filtersFormat.length > 0) {
                this.filtersFormat.forEach(format => {
                  if (this.filtersPrice.length > 0) {
                    this.filtersPrice.forEach(price => {
                      if (photo.format.includes(format) && photo.orientation.includes(orientation) && photo.interval.includes(price)) {
                        this.tabShowPhoto.push(photo);
                      }
                    });
                  } else if (photo.format.includes(format) && photo.orientation.includes(orientation)) {
                    this.tabShowPhoto.push(photo);
                  }
                });
              } else if (this.filtersPrice.length > 0) {
                this.filtersPrice.forEach(price => {
                  if (photo.interval.includes(price) && photo.orientation.includes(orientation)) {
                    this.tabShowPhoto.push(photo);
                  }
                });
              }
            }
          }
        });
        this.filtersFormat.forEach(format => {
          if (photo.format.includes(format) && this.filtersOrientation.length === 0) {
            if (this.filtersPrice.length > 0 ) {
              this.filtersPrice.forEach(price => {
                if (photo.interval.includes(price) && photo.format.includes(format)) {
                  this.tabShowPhoto.push(photo);
                }
              });
            } else if (!this.tabShowPhoto.includes(photo) && photo.format.includes(format)) {
              this.tabShowPhoto.push(photo);
            } 
          }
        });
        this.filtersPrice.forEach(price => {
          if (photo.interval.includes(price) && this.filtersOrientation.length === 0 && this.filtersFormat.length === 0) {
            if (!this.tabShowPhoto.includes(photo)) {
              this.tabShowPhoto.push(photo);
            }
          }
        });
      });
    }
    this.nbResult = this.tabShowPhoto.length;
  }

  addFiltersOrientation(eventValue: Array<string>) {
    this.filtersOrientation = eventValue;
  }
  addFiltersFormat(eventValue: Array<string>) {
    this.filtersFormat = eventValue;
  }
  addFiltersPrice(eventValue: Array<string>) {
    this.filtersPrice = eventValue;
  }

}
