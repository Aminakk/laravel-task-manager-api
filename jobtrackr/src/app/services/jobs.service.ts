import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../app.config';

@Injectable({providedIn: 'root'})
export class JobsService {
  constructor(private http: HttpClient) { }
  private api = API_URL;
  createJob(payload: any) {
    return this.http.post(`${this.api}/job-applications`, payload);
  }
}
