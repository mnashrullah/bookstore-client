import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  mainUrl = 'https://hidden-earth-26826.herokuapp.com';

  constructor(private http: HttpClient) { }
  getAllBooks(): Observable<Object> {
    return this.http.get(this.mainUrl + '/api/books');
  }
  getBook(id): Observable<Object> {
    return this.http.get(this.mainUrl + '/api/books/' + id);
  }
  createBook(book): Observable<Object> {
    return this.http.post(
      this.mainUrl + '/api/books/',
      book);
  }
  updateBook(id, book): Observable<Object> {
    return this.http.put(
      this.mainUrl + '/api/books/' + id,
      book)
  }
  deleteBook(id): Observable<Object> {
    return this.http.delete(this.mainUrl + '/api/books/' + id)
  }
  deleteBooks(): Observable<Object> {
    return this.http.delete(this.mainUrl + '/api/books/')

  }
}
