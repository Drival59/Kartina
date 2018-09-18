import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FilteringService } from '../filtering.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtering',
  templateUrl: './filtering.component.html',
  styleUrls: ['./filtering.component.scss']
})
export class FilteringComponent implements OnInit {

  private themes;
  private orientations;
  private formats;
  private prices;
  private filtersOrientation: Array<string> = new Array<string>();
  private filtersFormat: Array<string> = new Array<string>();
  private filtersPrice: Array<string> = new Array<string>();

  @Output() ratingFiltersOrientation: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  @Output() ratingFiltersFormat: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();
  @Output() ratingFiltersPrice: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();

  constructor(private filteringService: FilteringService, private router: Router) { 
    this.orientations = filteringService.orientations;
    this.themes = filteringService.themes;
    this.formats = filteringService.formats;
    this.prices = filteringService.prices;
  }

  ngOnInit() {
  }

  addOrRemoveFilterOrientation(filter: string, eventValue) {
    if (eventValue.originalTarget.checked) {
      this.filtersOrientation.push(filter);
    } else {
      let index = this.filtersOrientation.indexOf(filter);
      this.filtersOrientation.splice(index, 1);     
    }
    this.ratingFiltersOrientation.emit(this.filtersOrientation);
  }

  addOrRemoveFilterFormat(filter: string, eventValue) {
    if (eventValue.originalTarget.checked) {
      this.filtersFormat.push(filter);
    } else {
      let index = this.filtersFormat.indexOf(filter);
      this.filtersFormat.splice(index, 1);     
    }
    this.ratingFiltersFormat.emit(this.filtersFormat);
  }

  addOrRemoveFilterPrice(filter: string, eventValue) {
    if (eventValue.originalTarget.checked) {
      this.filtersPrice.push(filter);
    } else {
      let index = this.filtersPrice.indexOf(filter);
      this.filtersPrice.splice(index, 1);     
    }
    this.ratingFiltersPrice.emit(this.filtersPrice);
  }


}
