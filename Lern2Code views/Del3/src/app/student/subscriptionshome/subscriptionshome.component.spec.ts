import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionshomeComponent } from './subscriptionshome.component';

describe('SubscriptionshomeComponent', () => {
  let component: SubscriptionshomeComponent;
  let fixture: ComponentFixture<SubscriptionshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
