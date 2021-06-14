import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddgrpcontentComponent } from './addgrpcontent.component';

describe('AddgrpcontentComponent', () => {
  let component: AddgrpcontentComponent;
  let fixture: ComponentFixture<AddgrpcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddgrpcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddgrpcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
