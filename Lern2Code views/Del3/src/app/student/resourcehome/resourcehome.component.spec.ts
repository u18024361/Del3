import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcehomeComponent } from './resourcehome.component';

describe('ResourcehomeComponent', () => {
  let component: ResourcehomeComponent;
  let fixture: ComponentFixture<ResourcehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourcehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourcehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
