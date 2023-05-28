import {CommonActions, StackActions} from '@react-navigation/native';

let _navigator: any;

export const Navigation = {
  setTopLevelNavigator: (navigationRef: any) =>
    setTopLevelNavigator(navigationRef),
  navigate: (name: string, params?: any) => navigate(name, params),
  goBack: () => goBack(),
  reset: (name: string, params?: any) => reset(name, params),
};

const setTopLevelNavigator = (navigationRef: any) => {
  _navigator = navigationRef;
};

const navigate = (name: string, params?: any) => {
  _navigator.dispatch(CommonActions.navigate({name, params}));
};

const goBack = () => {
  _navigator.dispatch(CommonActions.goBack());
};

const reset = (name: string, params?: any) => {
  _navigator.dispatch(
    CommonActions.reset({index: 0, routes: [{name, params}]}),
  );
};
