export interface HomeState {
  loading: boolean;
  error: string | undefined;
}

import { History } from 'history';

import { RouterState } from 'connected-react-router';

export interface State {
  history?: History;
  router?: RouterState;
  home: HomeState;
}
