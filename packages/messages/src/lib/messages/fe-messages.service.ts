import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeMessagesService {
  private errorsSubject = new BehaviorSubject<string[]>([])
  errors$: Observable<string[]> = this.errorsSubject.asObservable()

  emitError(error: string | string[]) {
    if (Array.isArray(error)) {
      this.error(...error)
    } else {
      this.error(error)
    }
  }

  private error(...errors: string[]) {
    this.errorsSubject.next(errors)
  }
}
