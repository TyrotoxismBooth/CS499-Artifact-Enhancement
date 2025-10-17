import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

import { Destination } from '../models/destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationData {

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) { }
  url = 'http://localhost:3000/api/destinations';
  baseUrl = 'http://localhost:3000/api';

  getDestinations() : Observable<Destination[]> {
    return this.http.get<Destination[]>(this.url);
  }

  addDestination(formData: Destination) : Observable<Destination> {
    return this.http.post<Destination>(this.url, formData);
  }

  getDestination(destinationId: number) : Observable<Destination[]> {
    // console.log('Inside DestinationData::getDestinations');
    return this.http.get<Destination[]>(this.url + '/' + destinationId);
  }

  updateDestination(formData: Destination) : Observable<Destination> {
      // console.log('Inside DestinationData::addDestinationss')
      return this.http.put<Destination>(this.url + '/'  + formData.destinationId, formData);
  }

  // Call to our /login endpoint, returns JWT
  login(user: User, passwd: string) : Observable<AuthResponse> {
    // console.log('Inside TripDataService::login');
    return this.handleAuthAPICall('login', user, passwd);
  }

  // Call to our /register endpoint, creates user and returns JWT
  register(user: User, passwd: string) : Observable<AuthResponse> {
    // console.log('Inside TripDataService::register');
    return this.handleAuthAPICall('register', user, passwd);
  }

  // helper method to process both login and register methods
  handleAuthAPICall(endpoint: string, user: User, passwd: string) :
    Observable<AuthResponse> {
    // console.log('Inside TripDataService::handleAuthAPICall');
    let formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };

    return this.http.post<AuthResponse>(this.baseUrl + '/' + endpoint,
formData);
  }
}
