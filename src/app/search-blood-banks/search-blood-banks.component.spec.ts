import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBloodBanksComponent } from './search-blood-banks.component';

describe('SearchBloodBanksComponent', () => {
  let component: SearchBloodBanksComponent;
  let fixture: ComponentFixture<SearchBloodBanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBloodBanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBloodBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
