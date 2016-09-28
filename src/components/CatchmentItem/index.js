import React, { PropTypes } from 'react';
import { View, Text, Linking, TouchableHighlight, Image } from 'react-native';

import { Card, CardSection } from '../common';
import SubcatchmentList from '../SubcatchmentList';

const propTypes = {
  toRoute: PropTypes.func.isRequired,
};

class CatchmentItem extends React.Component {
  mapClick = (code) => {
    this.props.toRoute({
      name: 'Subcatchments',
      component: SubcatchmentList,
      passProps: { catchmentid: code }
    });
  };

  render() {
    const { Name, Code } = this.props.catchment;
    return (

      <Card>
        <CardSection>
        <TouchableHighlight onPress={() => this.mapClick(Code)}>
          <View style={styles.containerStyle}>
            <Image
              style={styles.catchmentIconStyle}
              source={{ uri: 'https://www.catchments.ie/wp-content/themes/epa/css/images/catchment.png' }}
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
    height: 40
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

CatchmentItem.propTypes = propTypes;

export default CatchmentItem;
