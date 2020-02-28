import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  newReleases: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError;

  constructor(private spotify: SpotifyService) {
    this.error = false;
    this.loading = true;

    this.spotify.getNewReleases()
      .subscribe((data: any) => {
        console.log(data);
        this.newReleases = data;
        this.loading = false;
      }, (errorServicio) => {
        this.loading = false;
        this.error = true;
        console.log(errorServicio.error.error.message);
        this.mensajeError = errorServicio.error.error.message;
      }
      );

  }

  ngOnInit(): void {
  }
}
