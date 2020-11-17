import { Component, OnInit } from '@angular/core';
import {ItemsService} from './items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  height = 300;
  itemHeight = 100;
  triggerOffset = 50;
  pageIndex = 0;
  nbOfPageFetch = 3;
  nbOfitemsToFetch;
  items;
  constructor(private service: ItemsService) {
    this.nbOfitemsToFetch = this.height / this.itemHeight  * this.nbOfPageFetch;
    this.items = service.getItems(0, this.nbOfitemsToFetch);
    this.pageIndex += 3;
  }

  ngOnInit(): void {
  }

  handleScroll($event) {
    if (($event.target.scrollTop + this.height) > ((this.pageIndex * this.height) - this.triggerOffset)) {
      this.pageIndex += this.nbOfPageFetch;
      const start = this.items.length + 1;
      const newItems = this.service.getItems(start, start + this.nbOfitemsToFetch)
      this.items = [...this.items, ...newItems];
    }
  }
}
