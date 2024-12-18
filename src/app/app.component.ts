import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './Services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { response } from 'express';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HttpClientModule],
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
