import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpsesscontentComponent } from './grpsesscontent.component';

describe('GrpsesscontentComponent', () => {
  let component: GrpsesscontentComponent;
  let fixture: ComponentFixture<GrpsesscontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrpsesscontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpsesscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
