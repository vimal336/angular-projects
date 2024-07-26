import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { FormState, createInitialState } from './employee.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'form' })
export class FormStore extends Store<FormState> {
  constructor() {
    super(createInitialState());
  }
}

