import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-photographs-theme',
  templateUrl: './photographs-theme.component.html',
  styleUrls: ['./photographs-theme.component.scss']
})
export class PhotographsThemeComponent implements OnInit {

  private urlKartina: string;
  private themeName: string;
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  constructor(private router: Router, private route: ActivatedRoute) {
    this.urlKartina = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.themeName = this.route.snapshot.paramMap.get('themeName');
  }

  ngDoCheck() {
    this.themeName = this.route.snapshot.paramMap.get('themeName');
    this.urlKartina = this.router.url;
  }
  
  ngOnDestroy() {
  }
}
