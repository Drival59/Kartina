import { Component, OnInit, Input } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  faChevronRight = faChevronRight;
  @Input() breadcrumb : Array<string>;
  
  constructor(private router : Router) {   
  }

  ngOnInit() {
  }

  navigateTo(url: string) {
    let urlLower = url.toLowerCase();   
    this.router.navigate([urlLower]);
  }
  
}
