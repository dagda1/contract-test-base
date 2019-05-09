import React, { useEffect } from 'react';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import { connect } from 'react-redux';
import { isLoadingSelector } from '../../containers/Home/selectors';
import { errorSelector } from '../../containers/Home/selectors';
import { State, HomeState } from '../../types/state';
import { clearState } from './actions';

const styles = require('./Home.scss');

export interface HomeProps {
  clear: () => void;
}

interface StoreState {
  loading: boolean;
  error: string | undefined;
  forecast: HomeState;
}

type Props = HomeProps & StoreState;

export const HomeView: React.FunctionComponent<Props> = ({ clear }) => {
  useEffect(() => {
    clear();
  }, [clear]);

  return (
    <ApplicationLayout heading="Home">
      <div className={styles.main}>
        <div>Some div</div>
      </div>
    </ApplicationLayout>
  );
};

export const Home = connect(
  (state: State) => ({
    loading: isLoadingSelector(state),
    error: errorSelector(state)
  }),
  (dispatch) => {
    return {
      clear: () => dispatch(clearState)
    };
  }
)(HomeView);
