import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tagsHistory: string[] = [];
  private apiKey: string  = 'UDKSyVSgvETNdjBM3FKnAtswByUy6scD';

  constructor() { }

  get tagsHistory() {
    return [...this._tagsHistory];
  }

  private organizaHistory( tag: string ) {
    tag = tag.toLowerCase();

    if ( this._tagsHistory.includes( tag )) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag )
    }

    this._tagsHistory.unshift( tag );
    this._tagsHistory = this._tagsHistory.splice(0,10);

  }

  searchTag( tag: string ):void {

    if( tag.length === 0 ) return;
    this.organizaHistory(tag)

  }
}
