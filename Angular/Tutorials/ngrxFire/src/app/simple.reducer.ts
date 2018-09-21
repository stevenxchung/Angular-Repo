import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'Hello World', action: Action) {
  switch (action.type) {
    case 'SPANISH':
      return (state = 'Mola Mundo');
    case 'FRENCH':
      return (state = 'Bonjour le monde');
    default:
      return state;
  }
}
