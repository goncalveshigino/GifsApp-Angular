import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {



  constructor( private gifsService: GifsService ){}

 get tags(): string[] {
   return this.gifsService.tagsHistory;
  }

  searchTag( tag: string) {
    this.gifsService.searchTag( tag );
  }

}
