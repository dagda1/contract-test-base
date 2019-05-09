import * as Urls from '../urls';
import { Home } from '../containers/Home';
import { RouteProps } from 'react-router';

export interface Page<Props = unknown> extends RouteProps {
  heading: string;
  path: string;
  footerPage?: boolean;
}

export const routes: Page[] = [
  {
    heading: 'Home',
    path: Urls.Home,
    component: Home,
    exact: true
  }
];
