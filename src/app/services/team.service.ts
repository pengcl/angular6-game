import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/catch';

import {Config} from '../config';

@Injectable()
export class TeamService {

  constructor(private http: HttpClient) {
  }

  find(id?): Promise<any> {
    if (id) {
      return this.http.get(Config.prefix.api + '/team/find?id=' + id)
        .toPromise()
        .then(response => response)
        .catch(this.handleError);
    } else {
      return this.http.get(Config.prefix.api + '/team/find')
        .toPromise()
        .then(response => response)
        .catch(this.handleError);
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
