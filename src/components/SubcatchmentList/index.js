import React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import SubcatchmentItem from '../SubcatchmentItem';

class SubcatchmentList extends React.Component {
  state = ({
    subcatchments: [],
    catchmentid: ''
  });

  componentWillMount() {
    const { catchmentid } = this.props;
    axios.get(`https://wfdapi.edenireland.ie/api/catchment/${catchmentid}`)
      .then(subcatchments => this.setState({
        subcatchments: subcatchments.data.Subcatchments,
        catchmentid: subcatchments.data.Code
      }))
      .catch(error => console.log(error));
  }

  renderSubcatchments() {
    const catchmentid = this.state.catchmentid;
    return this.state.subcatchments.map(sub =>
      <SubcatchmentItem {...this.props} key={sub.Code} catchment={catchmentid} subcatchment={sub} />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderSubcatchments()}
      </ScrollView>
    );
  }
}

export default SubcatchmentList;
