import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import WaterbodyItem from '../WaterbodyItem';

class WaterbodyList extends React.Component {
  state = ({ waterbodies: [] });

  componentWillMount() {
    const { catchmentid, subcatchmentid } = this.props;
    axios.get(`https://wfdapi.edenireland.ie/api/catchment/${catchmentid}/subcatchment/${subcatchmentid}`)
      .then(waterbodies => this.setState({ waterbodies: waterbodies.data.Waterbodies }))
      .catch(error => console.log(error));
  }

  renderWaterbodies() {
    return this.state.waterbodies.map(wat =>
      <WaterbodyItem {...this.props} key={wat.Code} waterbody={wat} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderWaterbodies()}
      </ScrollView>
    );
  }
}

export default WaterbodyList;
