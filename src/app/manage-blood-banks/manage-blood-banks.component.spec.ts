import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageBloodBanksComponent } from './manage-blood-banks.component';

describe('ManageBloodBanksComponent', () => {
  let component: ManageBloodBanksComponent;
  let fixture: ComponentFixture<ManageBloodBanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageBloodBanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageBloodBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
