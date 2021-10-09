import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationCardsComponent } from './notification-cards.component';

describe('NotificationCardsComponent', () => {
  let component: NotificationCardsComponent;
  let fixture: ComponentFixture<NotificationCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotificationCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
