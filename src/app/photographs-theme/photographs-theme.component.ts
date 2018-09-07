import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photographs-theme',
  templateUrl: './photographs-theme.component.html',
  styleUrls: ['./photographs-theme.component.scss']
})
export class PhotographsThemeComponent implements OnInit {

  private urlKartina: string;

  constructor(private router: Router) {
    this.urlKartina = this.router.url;
  }

  ngOnInit() {
  }

}
