import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photographs',
  templateUrl: './photographs.component.html',
  styleUrls: ['./photographs.component.scss']
})
export class PhotographsComponent implements OnInit {

  private urlKartina: string;

  constructor(private router : Router) {
    this.urlKartina = this.router.url;
  }

  ngOnInit() {
  }

}
