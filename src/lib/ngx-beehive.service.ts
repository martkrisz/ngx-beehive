import { Injectable } from '@angular/core';
import { Store } from 'rx-beehive';

@Injectable({
  providedIn: 'root'
})
export class NgxBeehiveService<T> extends Store<T> {

  constructor() {
    super();
  }
}
