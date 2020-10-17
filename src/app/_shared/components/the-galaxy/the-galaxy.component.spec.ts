import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheGalaxyComponent } from './the-galaxy.component';

describe('TheGalaxyComponent', () => {
  let component: TheGalaxyComponent;
  let fixture: ComponentFixture<TheGalaxyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheGalaxyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheGalaxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
