import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetutorComponent } from './createtutor.component';

describe('CreatetutorComponent', () => {
  let component: CreatetutorComponent;
  let fixture: ComponentFixture<CreatetutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatetutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
