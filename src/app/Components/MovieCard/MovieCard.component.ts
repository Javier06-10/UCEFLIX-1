import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie } from '../../Models/Movie';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './MovieCard.component.html',
  styleUrl: './MovieCard.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieCardComponent { 
  @Input()
  public movie! : Movie;
}
