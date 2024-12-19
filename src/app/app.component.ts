import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './Services/Api.service';
import { Movie } from './Models/Movie';
import { CommonModule } from '@angular/common';
import { MovieCardComponent } from "./Components/MovieCard/MovieCard.component";
import { lastValueFrom } from 'rxjs';
import { ScrollCardHorizontalComponent } from './Components/ScrollCardHorizontal/ScrollCardHorizontal.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, 
    CommonModule, 
    ScrollCardHorizontalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public movies! : Movie[];
  public moviesSoftwawe! : Movie[];
  public moviesLaws! : Movie[];
  public moviesMedical! : Movie[];
  public moviesArchitec! : Movie[];
  title = 'uceflix';
  constructor(private apiService : ApiService){

  }

  async getPelisBySearch(search: string): Promise<Movie[]>{
    const data = await lastValueFrom(this.apiService.GetMoviewBySearch(search));
    const response = data.results; 
    return response;
  }

  async ngOnInit(){
    this.moviesSoftwawe = await this.getPelisBySearch("software");
    this.moviesLaws = await this.getPelisBySearch("leyes");
    this.moviesMedical = await this.getPelisBySearch("medicina");
    this.moviesArchitec = await this.getPelisBySearch("architec");
  }
}
