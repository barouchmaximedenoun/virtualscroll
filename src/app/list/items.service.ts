import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private items = [];
  constructor() {
  }

  getItems(pageIndex: number, itemCount: number) {
    console.log('fetch')
    for (let i = pageIndex; i <= (pageIndex + itemCount); i++) {
      this.items[i] = 'item ' + i;
    }
    return [... this.items.slice(pageIndex, ( 1 + itemCount ) )];
  }

}
