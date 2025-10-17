import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { trips } from '../data/destination';
import { DestinationCard } from '../destination-card/destination-card';
import { Destination } from '../models/destination';
import { DestinationData } from '../services/destination-data';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';


@Component({
  selector: 'app-destination-listing',
  imports: [CommonModule, DestinationCard],
  templateUrl: './destination-listing.html',
  styleUrl: './destination-listing.scss',
  providers: [DestinationData]
})
export class DestinationListing implements OnInit {
  destinations!: Destination[];
  message: string = '';

  constructor(
    private destinationData: DestinationData,
    private router: Router,
    private authenticationService: Authentication
    ) {
    console.log('destination-listing constructor');
  }

  public addDestination(): void {
    this.router.navigate(['add-destination']);
  }

  private getStuff(): void {
    this.destinationData.getDestinations()
      .subscribe({
        next: (value: any) => {
          this.destinations = value;
          if(value.length > 0)
          {
            this.message = 'There are ' + value.length + ' destinationss available.';
          }
          else 
          {
            this.message = 'There were no destinations retrieved from the database.';
          }
          console.log(this.message);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }

  public isLoggedIn()
  {
    return this.authenticationService.isLoggedIn();
  }
}

