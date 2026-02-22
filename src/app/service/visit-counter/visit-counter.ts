import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type VisitCounterResponse = {
  count: number;
  updatedAt: string;
};

@Injectable({ providedIn: 'root' })
export class VisitCounter {
  private readonly httpClient = inject(HttpClient);
  private readonly url = 'https://profile-two-sooty.vercel.app/api/visits';
  // private readonly url = 'http://localhost:3000/api/visits';

  trackVisit(): Observable<VisitCounterResponse> {
    return this.httpClient.get<VisitCounterResponse>(this.url);
  }
}
