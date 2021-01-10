import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatorioMesComponent } from './relatorio-mes.component';

describe('RelatorioMesComponent', () => {
  let component: RelatorioMesComponent;
  let fixture: ComponentFixture<RelatorioMesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelatorioMesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelatorioMesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
