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

  constructor(private filtreringService: FilteringService) { 
    this.orientations = filtreringService.orientations;
    this.themes = filtreringService.themes;
  }

  ngOnInit() {
  }

}
