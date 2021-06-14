import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpsesscontenthomeComponent } from './grpsesscontenthome.component';

describe('GrpsesscontenthomeComponent', () => {
  let component: GrpsesscontenthomeComponent;
  let fixture: ComponentFixture<GrpsesscontenthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrpsesscontenthomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpsesscontenthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
