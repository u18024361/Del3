import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeddbackhomeComponent } from './feddbackhome.component';

describe('FeddbackhomeComponent', () => {
  let component: FeddbackhomeComponent;
  let fixture: ComponentFixture<FeddbackhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeddbackhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeddbackhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
