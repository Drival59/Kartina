import { Component, OnInit, Input } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  faChevronRight = faChevronRight;
  @Input() breadcrumb : Array<string>;
  
  constructor() {
  }

  ngOnInit() {
  }


}
