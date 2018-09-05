import { Component, OnInit, Input } from '@angular/core';
import { faUser, faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  @Input() breadcrumb: Array<string>;

  constructor() {
  }

  ngOnInit() {
  }
}
