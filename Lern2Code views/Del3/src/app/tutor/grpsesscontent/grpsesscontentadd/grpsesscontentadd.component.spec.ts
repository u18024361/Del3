import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpsesscontentaddComponent } from './grpsesscontentadd.component';

describe('GrpsesscontentaddComponent', () => {
  let component: GrpsesscontentaddComponent;
  let fixture: ComponentFixture<GrpsesscontentaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrpsesscontentaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpsesscontentaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
