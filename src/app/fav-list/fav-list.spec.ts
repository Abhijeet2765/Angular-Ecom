import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavList } from './fav-list';

describe('FavList', () => {
  let component: FavList;
  let fixture: ComponentFixture<FavList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
