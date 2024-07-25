export interface FormState {
  id: number;
  name: string;
  email: string;
}

export function createInitialState(): FormState {
  return {
    id: 0,
    name: '',
    email: ''
  };
}
