import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { FormStore } from './form.store';
import { FormState } from './employee.model';

@Injectable({ providedIn: 'root' })
export class FormQuery extends Query<FormState> {
  constructor(protected override store: FormStore) {
    super(store);
  }
}
