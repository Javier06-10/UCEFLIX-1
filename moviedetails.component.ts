import { ChangeDetectionStrategy, Component, inject, Injectable, Input} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Movie } from '../../Models/Movie';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../Services/Api.service';


@Component({
  selector: 'app-moviedetails',
  imports: [CommonModule,RouterModule],
  templateUrl: './moviedetails.component.html',
  styleUrl: './moviedetails.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
@Injectable({providedIn:'root'})

export class MoviedetailsComponent {
  
 @Input()
 public movie! : Movie;
 

 constructor(
  private route: ActivatedRoute,
  private movieService: ApiService
) {}

ngOnInit(): void {
  const movieId = +this.route.snapshot.paramMap.get('id')!;
  this.movieService.getMovieWithCredits(movieId).subscribe((movie) => {
    this.movie = movie;
  });
}
}
