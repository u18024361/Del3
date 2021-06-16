import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccepttutComponent } from './accepttut.component';

describe('AccepttutComponent', () => {
  let component: AccepttutComponent;
  let fixture: ComponentFixture<AccepttutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccepttutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccepttutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
