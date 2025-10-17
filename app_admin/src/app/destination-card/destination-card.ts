import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Destination } from '../models/destination';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-destination-card',
  imports: [CommonModule],
  templateUrl: './destination-card.html',
  styleUrl: './destination-card.scss'
})
export class DestinationCard implements OnInit {
  @Input('destination') destination: any;

  constructor(
    private router: Router,
    private authenticationService: Authentication
  ) {}

  ngOnInit(): void {
      
  }

  public editDestination(destination: Destination) {
    localStorage.removeItem('destinationId');
    localStorage.setItem('destinationId' , String(destination.destinationId));
    this.router.navigate(['edit-destination']);
  }

  public isLoggedIn()
  {
    return this.authenticationService.isLoggedIn();
  }
}
