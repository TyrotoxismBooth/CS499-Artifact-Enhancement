import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DestinationData } from '../services/destination-data';

@Component({
  selector: 'app-add-destination',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-destination.html',
  styleUrl: './add-destination.scss'
})
export class AddDestination implements OnInit {
  public addForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private destinationService: DestinationData
    ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
    _id: [],
      destinationId: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    })
  }

  public onSubmit() {
    this.submitted = true;
    if(this.addForm.valid){
      this.destinationService.addDestination(this.addForm.value)
        .subscribe( {
          next: (data: any) => {
            console.log(data);
            this.router.navigate(['']);
          },
          error: (error: any) => {
            console.log('Error: ' + error);
          }});
        }
  }
  // get the form short name to access the form fields
  get f() { return this.addForm.controls; }
}
    
