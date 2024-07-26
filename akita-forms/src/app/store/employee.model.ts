export interface FormState {
  id: number|null;
  name: string;
  email: string;
}

export function createInitialState(): FormState {
  return {
    id: null,
    name: '',
    email: ''
  };
}

