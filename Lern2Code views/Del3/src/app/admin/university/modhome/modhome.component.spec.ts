import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModhomeComponent } from './modhome.component';

describe('ModhomeComponent', () => {
  let component: ModhomeComponent;
  let fixture: ComponentFixture<ModhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModhomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
