import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as xml2js from "xml2js";
@Injectable({
  providedIn: 'root'
})
export class RSSFeedService {
  public ynetFeed$ = new BehaviorSubject<any[]>([]);
  public polisaFeed$ = new BehaviorSubject<any[]>([]);
  constructor(private http: HttpClient) { 
    this.ynetRSSFeed().subscribe();
    this.polisaRSSFeed().subscribe();
  }

  public ynetRSSFeed() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return this.http.get<any>('/ynapi', requestOptions)
      .pipe(
        tap((feed) => {
          const _parseString = xml2js.parseString;

            _parseString(feed, (err, result: any) => {
              console.log(result);
              const items = result.rss.channel[0].item;
              console.log(items);
              this.ynetFeed$.next(items);
            })

          })
      )
  }
  public polisaRSSFeed() {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text"
    };
    return this.http.get<any>('/poapi', requestOptions)
      .pipe(
        tap((feed) => {
          const _parseString = xml2js.parseString;

            _parseString(feed, (err, result: any) => {
              console.log(result);
              const items = result.rss.channel[0].item;
              console.log(items);
              this.polisaFeed$.next(items);
            })

          })
      )
  }
}
