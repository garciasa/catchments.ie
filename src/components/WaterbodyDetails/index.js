import React from 'react';
import { View, Text, Linking } from 'react-native';
import axios from 'axios';

import { Spinner, Button } from '../common';


class WaterbodyDetails extends React.Component {
  state = { waterbody: {}, loading: false };
  componentWillMount() {
    const { waterbodyid } = this.props;
    this.setState({ loading: true });

    axios.get(`https://wfdapi.edenireland.ie/api/waterbody/${waterbodyid}`)
      .then(waterbody => this.setState({
        waterbody: waterbody.data,
        loading: false
      }))
      .catch(error => console.log(error));
  }

  onMapClick() {
    Linking.openURL(`https://www.catchments.ie/maps/?layer=river&code=${this.state.waterbody.Code}`);
  }

  renderWaterbody() {
    if (this.state.loading) {
      return <Spinner />;
    }

    const { waterbody } = this.state;
    return (
      <View style={styles.containerDataStyle}>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold', marginRight: 10 }}>Code:</Text>
        <Text>{waterbody.Code}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold', marginRight: 10 }}>Name:</Text>
        <Text>{waterbody.Name}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold', marginRight: 10 }}>Latitude:</Text>
        <Text>{waterbody.Latitude}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold', marginRight: 10 }}>Longitude:</Text>
        <Text>{waterbody.Longitude}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold', marginRight: 10 }}>Cycle 1 Rbd:</Text>
        <Text>{waterbody.Rbd}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold', marginRight: 10 }}>Local Authority:</Text>
        <Text>{waterbody.LocalAuthority}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold', marginRight: 10 }}>Waterbody Catergory:</Text>
        <Text>{waterbody.Type}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold', marginRight: 10 }}>Protected Area:</Text>
        <Text>{waterbody.ProtectedArea}</Text>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontWeight: 'bold', marginRight: 10 }}>Tier 1 Risk:</Text>
        <Text>{waterbody.Tier1Risk}</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Button
          onPress={this.onMapClick.bind(this)}
        >
          View on Map
        </Button>
      </View>
      </View>
    );
  }

  render() {
    return (
      <View>
        {this.renderWaterbody()}
      </View>
    );
  }
}


const styles = {
  containerStyle: {
    flexDirection: 'row',
  },
  containerDataStyle: {
    flexDirection: 'column',
    marginLeft: 10,
    marginTop: 10
  },
  catchmentIconStyle: {
    width: 30,
    height: 30,
    marginRight: 10
  }
};

export default WaterbodyDetails;
