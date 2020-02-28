import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http:HttpClient) {
    console.log("Spotify service listo");
   }

   getQuery(query: string){
     const url = `https://api.spotify.com/v1/${query}`;
    //  https://api.spotify.com/v1
     const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD1wQHM2HMk5QkLcs405amH2LnZ5b6aNnhf6-H4BDB-h8ETD6xxc1uy_bn-Yz2QhEy04Cjx4kpOWADwNwPD4QRRSNU84NYcXjyLXYZ_L2QJHuWqluvu8_3FeCNX2jL2YGt0AJPV_JWKuEyq3pzCO3iDrtv4uRCdww0'
    });

    return this.http.get( url, {headers});
   }

   getNewReleases(){
   
    return this.getQuery('browse/new-releases')
      .pipe(map( data=> {
       return data['albums'].items;
     }));
   }

   getArtistas(termino: string){

    return this.getQuery(`search?q=${termino}&type=artist`)
    .pipe(map(data => data['artists'].items));

   }

   getArtista(id: string){
    return this.getQuery(`artists/${id}`)
   }

   getTopTracks(id: string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
    .pipe( map( data => data['tracks']));
   }
   //https://api.spotify.com/v1/artists/3WrFJ7ztbogyGnTHbHJFl2/top-tracks?country=us

  // artists/{id}/top-tracks
}