import { TestBed } from '@angular/core/testing';

import { AuthEffect } from './auth.effect';

describe('Auth.EffectsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthEffect.EffectsService = TestBed.get(AuthEffect.EffectsService);
    expect(service).toBeTruthy();
  });
});
