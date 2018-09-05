import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent implements OnInit {

  private urlKartina: string;

  constructor(private router : Router) {
    this.urlKartina = this.router.url;
  }

  ngOnInit() {
  }

}
