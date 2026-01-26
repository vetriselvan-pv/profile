import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BlogList {
  private httpClient = inject(HttpClient);

  getBlogList(){
    return this.httpClient.get<any>('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vetriselvan_11').pipe(
      map((res) => res.items),
      catchError((err) => of([]))
    )
  }
}
