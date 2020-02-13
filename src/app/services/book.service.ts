import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { mainUrl } from './config';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  // mainUrl = 'https://hidden-earth-26826.herokuapp.com';


  constructor(private http: HttpClient) { }
  getAllBooks(): Observable<Object> {
    return this.http.get(mainUrl + '/api/books');
  }
  getBook(id): Observable<Object> {
    return this.http.get(mainUrl + '/api/books/' + id);
  }
  createBook(book): Observable<Object> {
    return this.http.post(
      mainUrl + '/api/books/',
      book);
  }
  updateBook(id, book): Observable<Object> {
    return this.http.put(
      mainUrl + '/api/books/' + id,
      book)
  }
  deleteBook(id): Observable<Object> {
    return this.http.delete(mainUrl + '/api/books/' + id)
  }
  deleteBooks(): Observable<Object> {
    return this.http.delete(mainUrl + '/api/books/')

  }
}
