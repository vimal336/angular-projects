import { Injectable } from '@angular/core';
   import { QueryEntity } from '@datorama/akita';
   import { FormStore } from './form.store';
import { FormState } from './employee.model';

   @Injectable({ providedIn: 'root' })
   export class FormQuery extends QueryEntity<FormState> {
 
     constructor(protected store: FormStore) {
       super(store);
     }
   }
