import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipalitiesListComponent } from './municipalities-list.component';

describe('MunicipalitiesListComponent', () => {
  let component: MunicipalitiesListComponent;
  let fixture: ComponentFixture<MunicipalitiesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MunicipalitiesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipalitiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
