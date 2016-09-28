import React from 'react';
import { View } from 'react-native';
import Router from 'react-native-simple-router';

import CatchmentsList from './components/CatchmentsList';

class App extends React.Component {

  render() {
    return (
      <View style={{ flex: 1 }}>
      <Router
        firstRoute={firstRoute}
        headerStyle={styles.header}
        titleStyle={styles.title}
      />
      </View>
    );
  }
}

const firstRoute = {
    name: 'Catchments.ie',
    component: CatchmentsList,
};

const styles = {
  header: {
    backgroundColor: '#13716A',
  },
  title: {
    fontSize: 20
  }
};

export default App;
