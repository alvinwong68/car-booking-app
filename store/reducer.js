import { FETCH_STREET_POSITION, CLEAR_POSITION } from './action';

const initialState = {
    position: null,
    initialRegion: {
        latitude: 1.3047044,
        longitude: 103.8535034,
        latitudeDelta: 0.00922,
        longitudeDelta: 0.00421,
    },
    carLocations: [{
        rotation: 78,
        latitude: 1.306858,
        longitude: 103.855239
    },
    {
        rotation: 10,
        latitude: 1.3032566,
        longitude: 103.8530113,
    },
    {
        rotation: 262,
        latitude: 1.306016,
        longitude: 103.853150
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STREET_POSITION:
            const position = action.position;
            return {
                ...state,
                position
            }
        case CLEAR_POSITION: {
            return {
                ...state,
                position: null
            }
        }
        default:
            return state;
    }
}

export default reducer;