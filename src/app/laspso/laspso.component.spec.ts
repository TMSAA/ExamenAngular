import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaspsoComponent } from './laspso.component';

describe('LaspsoComponent', () => {
  let component: LaspsoComponent;
  let fixture: ComponentFixture<LaspsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaspsoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaspsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
