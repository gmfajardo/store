import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {

  images: string[]=[
    '../../assets/images/archery-1.jpg',
    '../../assets/images/archery-2.jpg',
    '../../assets/images/archery-3.jpg'
  ];
  constructor() { }

  ngOnInit() {
  }

}
