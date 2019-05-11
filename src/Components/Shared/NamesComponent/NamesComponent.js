import React from 'react';
import { map } from 'lodash';

class NamesComponent extends React.Component {
  render() {
    const names = map(this.props.names, 'name');
    return (
      <p>
        {names.join()}
      </p>
    );
  }
}

export default NamesComponent;
