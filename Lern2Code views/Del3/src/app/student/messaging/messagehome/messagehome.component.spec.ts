import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagehomeComponent } from './messagehome.component';

describe('MessagehomeComponent', () => {
  let component: MessagehomeComponent;
  let fixture: ComponentFixture<MessagehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagehomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
