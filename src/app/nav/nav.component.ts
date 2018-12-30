import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  // OR (either will work)
  appTitle = 'PromoArtist';

  constructor() { }

  ngOnInit() {
  }

}
