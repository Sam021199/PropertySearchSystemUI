import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KarnikaComponent } from './karnika.component';

describe('KarnikaComponent', () => {
  let component: KarnikaComponent;
  let fixture: ComponentFixture<KarnikaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KarnikaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KarnikaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
