

export const fetchRoute = (origin, destination) => async (dispatch) => {
    try {
      dispatch({ type: 'FETCH_ROUTE_LOADING' });
      const response = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin.latitude},${origin.longitude}&destination=${destination.latitude},${destination.longitude}&key=AIzaSyDdIQ3GXG75xS54kXLVE7zAmMZKkJxP3EU`);
      const data = await response.json();
      dispatch({ type: 'FETCH_ROUTE_SUCCESS', payload: data });
    } catch (error) {
      dispatch({ type: 'FETCH_ROUTE_ERROR', payload: error });
    }
  };
  