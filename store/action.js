import axios from 'axios';

const COMSUMER_KEY = ''; //Enter your own key here
const MAPQUEST_URL = 'http://www.mapquestapi.com/geocoding/v1/reverse';

export const FETCH_STREET_POSITION = 'FETCH_STREET_POSITION';
export const CLEAR_POSITION = 'CLEAR_POSITION';

export const fetchPosition = (region) => {
    return async(dispatch) => {
        const response = await axios.get(`${MAPQUEST_URL}?key=${COMSUMER_KEY}&location=${region.latitude}%2C${region.longitude}&outFormat=json&thumbMaps=false`)
        const loc = response.data.results[0].locations[0].street;
        dispatch({
            type: FETCH_STREET_POSITION, 
            position: loc
        })
    }
}

export const clearPosition = () => {
    return async(dispatch) => {
        dispatch({
            type: CLEAR_POSITION
        })
    }
}