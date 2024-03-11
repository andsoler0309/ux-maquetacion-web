/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SonidosListaComponent } from './sonidos-lista.component';

describe('SonidosListaComponent', () => {
  let component: SonidosListaComponent;
  let fixture: ComponentFixture<SonidosListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonidosListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonidosListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
