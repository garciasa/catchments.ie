import React, { PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

import { Card, CardSection } from '../common';
import WaterbodyDetails from '../WaterbodyDetails';

const propTypes = {
  toRoute: PropTypes.func.isRequired,
};

class WaterbodyItem extends React.Component {
  mapClick = (code) => {
    this.props.toRoute({
      name: 'Waterbody Details',
      component: WaterbodyDetails,
      passProps: {
        waterbodyid: code
      }
    });
  };

  render() {
    const { Name, Code, Status, Type } = this.props.waterbody;

    return (

      <Card>
        <CardSection>
        <TouchableHighlight onPress={() => this.mapClick(Code)}>
          <View style={styles.containerStyle}>
            <Image
              style={styles.catchmentIconStyle}
              source={{ uri: 'https://www.catchments.ie/wp-content/themes/epa/css/images/waterbody.png' }}
            />
            <View style={styles.containerDataStyle}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', marginRight: 10 }}>Code:</Text>
                <Text>{Code}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', marginRight: 3 }}>Type: </Text>
                <Text>{Type}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', marginRight: 3 }}>Status: </Text>
                <Text>{Status}</Text>
              </View>
            </View>
          </View>
          </TouchableHighlight>
        </CardSection>
      </Card>
    );
  }
}


const styles = {
  containerStyle: {
    flexDirection: 'row',
  },
  containerDataStyle: {
    flexDirection: 'column',
  },
  catchmentIconStyle: {
    width: 30,
    height: 30,
    marginRight: 10
  }
};

WaterbodyItem.propTypes = propTypes;

export default WaterbodyItem;
