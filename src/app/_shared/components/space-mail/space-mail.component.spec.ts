import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpaceMailComponent } from './space-mail.component';
import { PeopleService } from 'src/app/_services/people.service';
import { ActivatedRoute } from '@angular/router';

describe('SpaceMailComponent', () => {
  let component: SpaceMailComponent;
  let fixture: ComponentFixture<SpaceMailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpaceMailComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceMailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
