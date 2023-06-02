import { TestBed } from '@angular/core/testing';

import { HttpserviceService } from './httpservice.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';

describe('HttpserviceService', () => {
  let service: HttpserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(HttpserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should be getJson',()=>{
    service.getJson('');
    expect(service.getJson).toBeDefined();
  });
  it('should be getMethod',()=>{
    service.getMethod('');
    expect(service.getMethod).toBeDefined();
  });
  it('should be postMethod',()=>{
    service.postMethod('','');
    expect(service.postMethod).toBeDefined();
  })
});
