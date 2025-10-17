import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDestination } from './add-destination';

describe('AddDestination', () => {
  let component: AddDestination;
  let fixture: ComponentFixture<AddDestination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDestination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDestination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
