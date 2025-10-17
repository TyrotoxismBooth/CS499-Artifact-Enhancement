import { Routes } from '@angular/router';
import { Login } from './login/login';
import { DestinationListing } from './destination-listing/destination-listing'
import { AddDestination } from './add-destination/add-destination';
import { EditDestination } from './edit-destination/edit-destination';

export const routes: Routes = [
    { path : '', component: DestinationListing},
    { path: 'login', component: Login },
    { path: 'edit-destination', component: EditDestination},
    { path: 'add-destination', component: AddDestination}
];
