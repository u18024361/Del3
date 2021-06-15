import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewgrpcontentComponent } from './viewgrpcontent.component';

describe('ViewgrpcontentComponent', () => {
  let component: ViewgrpcontentComponent;
  let fixture: ComponentFixture<ViewgrpcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewgrpcontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewgrpcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
