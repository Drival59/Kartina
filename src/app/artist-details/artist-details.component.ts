import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-details',
  templateUrl: './artist-details.component.html',
  styleUrls: ['./artist-details.component.scss']
})
export class ArtistDetailsComponent implements OnInit {

  private urlKartina: string;
  constructor(private router : Router) { 
    this.urlKartina = this.router.url;
  }

  ngOnInit() {
  }

}
