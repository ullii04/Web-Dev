import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { Album } from '../models/album.model'
import { Photo } from '../models/photo.model'

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private api = 'https://jsonplaceholder.typicode.com'

  constructor(private http: HttpClient) {}

  getAlbums(): Observable<Album[]> {
    return this.http.get<Album[]>(`${this.api}/albums`)
  }

  getAlbum(id: number): Observable<Album> {
    return this.http.get<Album>(`${this.api}/albums/${id}`)
  }

  getAlbumPhotos(id: number): Observable<Photo[]> {
    return this.http.get<Photo[]>(`${this.api}/albums/${id}/photos`)
  }

  updateAlbum(album: Album): Observable<Album> {
    return this.http.put<Album>(`${this.api}/albums/${album.id}`, album)
  }

  deleteAlbum(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/albums/${id}`)
  }
}