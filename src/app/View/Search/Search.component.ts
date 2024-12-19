import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../Models/Movie';
import { ApiService } from '../../Services/Api.service';
import { lastValueFrom } from 'rxjs';
import { MovieCardComponent } from '../../Components/MovieCard/MovieCard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search',
  imports: [MovieCardComponent, CommonModule],
  templateUrl: `./Search.component.html`,
  styleUrl: './Search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {
  private activatedRoute = inject(ActivatedRoute);
  public query = this.activatedRoute.snapshot.params['query'];

  public movies! : Movie[];

  constructor(private apiService: ApiService, private cdr : ChangeDetectorRef) {
    
  }
  async getPelisBySearch(search: string): Promise<Movie[]>{
        const data = await lastValueFrom(this.apiService.GetMoviewBySearch(search));
        const response = data.results;
        return response;
  }

  async ngOnInit(){
    this.movies = await this.getPelisBySearch(this.query);
    this.movies = this.movies.filter(movie => movie.poster_path != null && movie.poster_path !== '');
    this.cdr.detectChanges();
  }
}
