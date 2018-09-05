import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '../routing.service';

@Component({
  selector: 'app-photographs',
  templateUrl: './photographs.component.html',
  styleUrls: ['./photographs.component.scss']
})
export class PhotographsComponent implements OnInit {

  constructor(private router : Router, private routing : RoutingService) {
    this.routing.urlKartina = this.router.url;
  }

  ngOnInit() {
  }

}
