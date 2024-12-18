import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly TokeyKey = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZGZkZGIwY2UzMzY4NTAwN2Q3OGM4YzVlNDJmNjlmOCIsIm5iZiI6MTY3NzI4MjM2My43NDg5OTk4LCJzdWIiOiI2M2Y5NGMzYjg0ZjI0OTAwOGRhZmI1NmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.13dZngHdNRIZkse7s2hx0a9nD5uQaVKPwzrgNbP4hWw";
  constructor(private http: HttpClient) {

  }

  getPelis(){
    const url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.TokeyKey}`,
      'accept': 'application/json'
    });

    return this.http.get(`${url}/ruta`, { headers });
  }
}
