import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitheComponent } from './tithe.component';

describe('TitheComponent', () => {
  let component: TitheComponent;
  let fixture: ComponentFixture<TitheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TitheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
