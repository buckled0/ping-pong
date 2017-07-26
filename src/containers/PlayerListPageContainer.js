import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import * as actions from '../actions/playerActions';
//import FuelSavingsForm from '../components/FuelSavingsForm';

class PlayerListPageContainer extends Component {
  componentWillMount() {
    this.props.onGetPlayerDetails();
  }
  render() {
    return (
      <PlayerListPage
        playerName={props.playerName}
        playerLevel={props.level}
      />
    );
  }
};

PlayerListPage.propTypes = {
  playerName: PropTypes.object.isRequired,
  playerLevel: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    playerName: state.players.playerName,
    playerLevel: state.players.level
  };
}

function mapDispatchToProps(dispatch) {
  onGetPlayerDetails: () => {
    dispatch(getPlayerDetails());
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerListPageContainer);
