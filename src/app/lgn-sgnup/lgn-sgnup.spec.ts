import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgnSgnup } from './lgn-sgnup';

describe('LgnSgnup', () => {
  let component: LgnSgnup;
  let fixture: ComponentFixture<LgnSgnup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LgnSgnup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LgnSgnup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
