import React, { PropTypes } from 'react';
import { View, Text, TouchableHighlight, Image } from 'react-native';

import { Card, CardSection } from '../common';
import WaterbodyList from '../WaterbodyList';


const propTypes = {
  toRoute: PropTypes.func.isRequired,
};

class SubcatchmentItem extends React.Component {
  mapClick = (code, catchmentid) => {
    this.props.toRoute({
      name: 'Waterbodies',
      component: WaterbodyList,
      passProps: {
        catchmentid: catchmentid,
        subcatchmentid: code
      }
    });
  };

  render() {
    const { Name, Code, Area } = this.props.subcatchment;
    const catchmentid = this.props.catchment;
    return (

      <Card>
        <CardSection>
        <TouchableHighlight onPress={() => this.mapClick(Code, catchmentid)}>
          <View style={styles.containerStyle}>
            <Image
              style={styles.catchmentIconStyle}
              source={{ uri: 'https://www.catchments.ie/wp-content/themes/epa/css/images/subcatchment.png' }}
            />
            <View style={styles.containerDataStyle}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', marginRight: 10 }}>Code:</Text>
                <Text>{Code}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', marginRight: 3 }}>Name: </Text>
                <Text>{Name}</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', marginRight: 4 }}>Area: </Text>
                <Text>{Area}</Text>
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

SubcatchmentItem.propTypes = propTypes;

export default SubcatchmentItem;
