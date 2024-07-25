import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { FormState, createInitialState } from './employee.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'form' })
export class FormStore extends EntityStore<FormState> {
  constructor() {
    super(createInitialState());
  }
}

