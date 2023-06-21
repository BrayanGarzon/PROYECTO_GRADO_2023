import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowsitesComponent } from './showsites.component';

describe('ShowsitesComponent', () => {
  let component: ShowsitesComponent;
  let fixture: ComponentFixture<ShowsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowsitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
