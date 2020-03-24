import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Computer } from './../models/computer';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, retry} from 'rxjs/internal/operators';


@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  computerMarque = ['Dell', 'HP', 'Apple', 'Asus'];
  computerType = ['Portable', 'Fixe', 'Tablette hybride'];
  computerCategorie = ['Gaming', 'Bureautique', 'Premier Prix'];
  computers: Computer[];
  apiURL = 'http://localhost:3000/computers';
  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
    this.computers = [];
  }
  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = 'Error Code: ${error.status}\nMessage: ${error.message}';
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  getComputer(): Observable<Computer[]> {
    return this.http.get<Computer[]>(this.apiURL)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getComputerById(idComputer): Observable<Computer> {
    return this.http.get<Computer>(this.apiURL + '/' + idComputer)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  addComputer(computerToAdd): Observable<Computer> {
    return this.http.post<Computer>(this.apiURL, computerToAdd, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  deleteComputer(idComputerToDelete): Observable<Computer> {
    return this.http.delete<Computer>(this.apiURL + '/' + idComputerToDelete)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateComputer(computerToUpdate): Observable<Computer> {
    return this.http.put<Computer>(this.apiURL + '/' + computerToUpdate.id, computerToUpdate, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}

