import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import CatchmentItem from '../CatchmentItem';

class CatchmentsList extends React.Component {
  state = ({ catchments: [] });

  componentWillMount() {
    axios.get('https://wfdapi.edenireland.ie/api/catchment')
      .then(response => this.setState({ catchments: response.data.Catchments }))
      .catch(error => console.log(error));
  }

  renderCatchments() {
    return this.state.catchments.map(catchment =>
      <CatchmentItem {...this.props} key={catchment.Code} catchment={catchment} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderCatchments()}
      </ScrollView>
    );
  }
}

export default CatchmentsList;
