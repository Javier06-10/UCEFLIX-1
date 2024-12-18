import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './Services/api.service';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',  
})
export class AppComponent {
  title = 'UCEFLIX';
  constructor(private apiService: ApiService){

  }

  GetPelis(){

    this.apiService.getPelis().subscribe((response) => {
      console.log(response);
    });
  }
}
