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
  private filtersTab: Array<string> = new Array<string>();

  @Output() filters: EventEmitter<Array<string>> = new EventEmitter<Array<string>>();

  constructor(private filteringService: FilteringService, private router: Router) { 
    this.orientations = filteringService.orientations;
    this.themes = filteringService.themes;
    this.formats = filteringService.formats;
    this.prices = filteringService.prices;
  }

  ngOnInit() {
  }

  addFilter(filter: string, eventValue) {
    console.log(eventValue.originalTarget.checked);
    
    this.filtersTab.push(filter);
    this.filters.emit(this.filtersTab);
  }
}
