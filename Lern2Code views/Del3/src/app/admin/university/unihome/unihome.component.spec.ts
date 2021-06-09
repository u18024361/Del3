import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnihomeComponent } from './unihome.component';

describe('UnihomeComponent', () => {
  let component: UnihomeComponent;
  let fixture: ComponentFixture<UnihomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnihomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnihomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
