import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ImgBBService {
  private readonly apiKey = 'ec02801f26c0b1478fabd72db856a5cc';

  constructor(private http: HttpClient) {}

  upLoad(file: File): Observable<String> {
    const formData = new FormData();
    formData.append('image', file);
    return this.http
      .post('/upload', formData, { params: { key: this.apiKey } })
      .pipe(map((response: any) => response['data']['url']));
  }
}
