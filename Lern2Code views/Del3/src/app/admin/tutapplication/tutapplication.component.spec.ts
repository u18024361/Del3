import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutapplicationComponent } from './tutapplication.component';

describe('TutapplicationComponent', () => {
  let component: TutapplicationComponent;
  let fixture: ComponentFixture<TutapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
