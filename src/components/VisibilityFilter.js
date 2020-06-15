import React from 'react';
import { connect } from 'react-redux';
import { VISIBILITY_FILTERS } from '../constants';
import { setFilter } from '../redux/actions';

class VisibilityFilter extends React.Component {
  // constructor() {

  // }

  handleOnClick = (filter) => {
    console.log(filter)
    this.props.setFilter(filter)
  }

  render() {
    return <div>
      <button
        onClick={() => this.handleOnClick(VISIBILITY_FILTERS.ALL)}
      >{VISIBILITY_FILTERS.ALL}</button>
      <button
        onClick={() => this.handleOnClick(VISIBILITY_FILTERS.COMPLETED)}
      >{VISIBILITY_FILTERS.COMPLETED}</button>
      <button
        onClick={() => this.handleOnClick(VISIBILITY_FILTERS.PENDING)}
      >{VISIBILITY_FILTERS.PENDING}</button>
    </div>
  }
}

export default connect(null, { setFilter })(VisibilityFilter);