import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

const API_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYTVhZTE2ZDMwNTRhMTJlMjQ4ZmY1MTQ4N2IxMjE3ZSIsIm5iZiI6MTcyNzIxMDc0MC45NzU5MzUsInN1YiI6IjY2ZjMyMjVmN2VhODgxMzI5OGFiZWMyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T2txw7k9guqCVAEpzVfpVeTqjt5TV-2216byvwgnh6k';

const options = {
  params: {
    include_adult: 'false',
    include_video: 'true',
    language: 'en-US',
    page: '1',
    sort_by: 'popularity.desc'
  },
  headers: {
    accept: 'application/json',
    Authorization: API_KEY
  }
};

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  http = inject(HttpClient);

  getMovies() {
    return this.http.get<any>(`${API_URL}/discover/movie`, options);
  }

  getTvShows() {
    return this.http.get<any>(`${API_URL}/discover/tv`, options);
  }

  getRatedMovies(guestSessionId: string) {
    return this.http.get(`https://api.themoviedb.org/3/guest_session/${guestSessionId}/rated/movies`, options);
  }
  

  getBannerImage(id: number) {
    return this.http.get<any>(`${API_URL}/movie/${id}/images`, options);
  }

  getBannerVideo(id: number) {
    return this.http.get<any>(`${API_URL}/movie/${id}/videos`, options);
  }

  getBannerDetail(id: number) {
    return this.http.get<any>(`${API_URL}/movie/${id}`, options);
  }

  getNowPlayingMovies() {
    return this.http.get<any>(`${API_URL}/movie/now_playing`, options);
  }

  getPopularMovies() {
    return this.http.get<any>(`${API_URL}/movie/popular`, options);
  }

  getTopRated() {
    return this.http.get<any>(`${API_URL}/movie/top_rated`, options);
  }

  getUpcomingMovies() {
    return this.http.get<any>(`${API_URL}/movie/upcoming`, options);
  }

  getGuestSession() {
    return this.http.get<any>('https://api.themoviedb.org/3/guest_session/new', {
      headers: {
        accept: 'application/json',
        Authorization: API_KEY
      }
    });
  }
  
}
