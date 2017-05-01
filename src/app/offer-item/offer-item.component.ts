import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferItemComponent implements OnInit {
  name: string;
  constructor() {
    this.name = 'Amazing 2-bedroom house';
  }

  ngOnInit() {
  }

}
