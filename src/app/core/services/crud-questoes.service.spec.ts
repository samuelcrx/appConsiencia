import { TestBed } from '@angular/core/testing';

import { CrudQuestoesService } from './crud-questoes.service';

describe('CrudQuestoesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CrudQuestoesService = TestBed.get(CrudQuestoesService);
    expect(service).toBeTruthy();
  });
});
