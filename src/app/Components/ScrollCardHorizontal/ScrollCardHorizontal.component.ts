import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Movie } from '../../Models/Movie';
import { MovieCardComponent } from '../MovieCard/MovieCard.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-card-horizontal',
  imports: [MovieCardComponent,CommonModule],
  templateUrl: `./ScrollCardHorizontal.component.html`,
  styleUrl: './ScrollCardHorizontal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollCardHorizontalComponent {
  @Input()
  public movies! : Movie[];

  @Input()
  public idScroll!: string;

  scrollLeft() {
    const scrollContainer = document.getElementById(this.idScroll);
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: -400, // Desplaza hacia la izquierda 200px
        behavior: 'smooth',
      });
    }
  }

  // Método para desplazar a la derecha
  scrollRight() {
    const scrollContainer = document.getElementById(this.idScroll);
    if (scrollContainer) {
      scrollContainer.scrollBy({
        left: 400, // Desplaza hacia la derecha 200px
        behavior: 'smooth',
      });
    }
  }

  ngOnInit(){
    console.log(this.movies);
  }
}
