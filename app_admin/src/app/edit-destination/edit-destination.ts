import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DestinationData } from '../services/destination-data';
import { Destination } from '../models/destination';

@Component({
  selector: 'app-edit-destination',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-destination.html',
  styleUrl: './edit-destination.scss'
})
export class EditDestination implements OnInit {
  public editForm!: FormGroup;
  destination!: Destination;
  submitted = false;
  message: string='';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private destinationData: DestinationData
  ) {}

  ngOnInit() : void{

    // Retrieve stashed destinationID
    let destinationId = localStorage.getItem("destinationId");
    if (!destinationId) {
      alert("Something went wrong, coudln't find where I stashed destinationId");
      this.router.navigate(['']);
      return;
    }

    console.log('EditDestination::ngOnInit');
    console.log('destinationId:' + destinationId);

    this.editForm = this.formBuilder.group({
      _id: [],
      destinationId: [destinationId, Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]      
    })


    this.destinationData.getDestination(Number(destinationId))
      .subscribe({
      next: (value: any) => {
        this.destination = value;
        // Populate our record into the form
        this.editForm.patchValue(value);
        if(!value)
        {
          this.message = 'No Destination Retrieved!';
        }
        else{
          this.message = 'Destination: ' + destinationId + ' retrieved';
        }
        console.log(this.message);
      },
      error: (error: any) => {
        console.log('Error: ' + error);
      }
    })
  }

  public onSubmit() 
  {
    this.submitted = true;
    if(this.editForm.valid)
    {
      this.destinationData.updateDestination(this.editForm.value)
      .subscribe({
        next: (value: any) => {
          console.log(value);
          this.router.navigate(['']);
        },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
    }
  }

  // get the form short name to access the form fields
  get f() { return this.editForm.controls; }
}
