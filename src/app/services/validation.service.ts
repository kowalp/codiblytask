import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  private $validation = new BehaviorSubject<boolean>(false);

  constructor() { }

  getValidationAsObservable(): Observable<boolean> {
    return this.$validation.asObservable();
  }

  setValidation(status: boolean): void {
    this.$validation.next(status);
  }
}
