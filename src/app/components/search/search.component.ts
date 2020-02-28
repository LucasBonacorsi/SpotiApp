import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent  {

  artistas:any[]= [];
  loading:boolean;

  constructor(private spotifyService: SpotifyService) { } 
   

  buscar(termino:string){
      this.loading = true;
      this.spotifyService.getArtistas(termino).subscribe((data:any) =>{
        console.log(termino);
        console.log(data);
        this.artistas = data;
        this.loading = false;
      })
  }
  
  
 
}
