import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegreehomeComponent } from './degreehome.component';

describe('DegreehomeComponent', () => {
  let component: DegreehomeComponent;
  let fixture: ComponentFixture<DegreehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegreehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegreehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
