import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdministrativoComponent } from './home-administrativo.component';

describe('HomeadministrativoComponent', () => {
  let component: HomeAdministrativoComponent;
  let fixture: ComponentFixture<HomeAdministrativoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAdministrativoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAdministrativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
