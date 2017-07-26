import actionTypes from '../actionTypes';

const getPlayerDetails = () => (
  (dispatch) => {
    return getPlayerApi.get().then((player) => {
      dispatch(getPlayerInfoFufilled(player));
    });
  }
);

const getPlayerInfoFufilled = player => (
  {
    type: actionTypes.GET_PLAYER_DETAILS,
    player
  }
);

export default getPlayerDetails;
