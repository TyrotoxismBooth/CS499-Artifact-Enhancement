import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationListing } from './destination-listing';

describe('DestinationListing', () => {
  let component: DestinationListing;
  let fixture: ComponentFixture<DestinationListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
