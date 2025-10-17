import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDestination } from './edit-destination';

describe('EditDestination', () => {
  let component: EditDestination;
  let fixture: ComponentFixture<EditDestination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditDestination]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDestination);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
