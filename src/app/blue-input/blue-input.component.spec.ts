import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlueInputComponent } from './blue-input.component';

describe('BlueInputComponent', () => {
  let component: BlueInputComponent;
  let fixture: ComponentFixture<BlueInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlueInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlueInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
