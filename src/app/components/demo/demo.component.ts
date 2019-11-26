import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
  title = 'demo';
  names = ['Juan', 'Pablo', 'Duarte'];
  power: number;
  constructor() { }

  ngOnInit() {
  }



  addItem() {
    this.names.push(this.title);
  }
  deleteItem(index: number) {
    this.names.splice(index, 1);
  }
}
