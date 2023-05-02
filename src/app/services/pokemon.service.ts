import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private objectSource = new BehaviorSubject<{}>({});

  $getObjectSource = this.objectSource.asObservable();

  constructor() { }

  setObjectSource(data:any) {
    this.objectSource.next(data);
  
  }


}

