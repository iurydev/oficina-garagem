import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosAdmComponent } from './servicos-adm.component';

describe('ServicosAdmComponent', () => {
  let component: ServicosAdmComponent;
  let fixture: ComponentFixture<ServicosAdmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicosAdmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicosAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
