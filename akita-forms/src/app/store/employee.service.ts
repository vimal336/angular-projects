import { Injectable } from '@angular/core';
   import { FormStore } from './form.store';
   import { FormState } from './employee.model';

   @Injectable({ providedIn: 'root' })
   export class FormService {
     constructor(private formStore: FormStore) {}

     updateForm(form: FormState) {
       this.formStore.update(form);
     }
   }
