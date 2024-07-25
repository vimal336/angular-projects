import { Injectable } from '@angular/core';
import { EntityStore } from '@datorama/akita';
import { FormState, createInitialState } from './employee.model';

@Injectable({ providedIn: 'root' })
export class FormStore extends EntityStore<FormState, any> {
  getEntity(id: number | null) {
    throw new Error('Method not implemented.');
  }
  constructor() {
    super(createInitialState());
  }
}
