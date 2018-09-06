import { Component, OnInit } from '@angular/core';
import { FilteringService } from '../filtering.service';

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

  constructor(private filteringService: FilteringService) { 
    this.orientations = filteringService.orientations;
    this.themes = filteringService.themes;
    this.formats = filteringService.formats;
    this.prices = filteringService.prices;
  }

  ngOnInit() {
  }

}
