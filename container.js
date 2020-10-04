
import React, { useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import MapView from 'react-native-maps';
import { useDispatch, useSelector } from 'react-redux';

import LocationSearch from './components/locationSearch/locationSearch';
import LocationPin from './components/locationPin/locationPin';
import carImg from './assets/images/car.png';
import ClassSelection from './components/classSelection/classSelection';
import ConfirmationModal from './components/confirmationModal/confirmationModal';
import * as coordinateActions from './store/action';

export default function Container() {
  const dispatch = useDispatch();
  
  const initialRegion = useSelector((state)=> {
    return state.coordinate.initialRegion
  });

  const position = useSelector((state) => {
    return state.coordinate.position
  });

  const carLocations = useSelector((state) => {
    return state.coordinate.carLocations
  })
 
  const [bookingModalVisible, setBookingModalVisible] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    const init = async () => {
      onRegionChange(initialRegion)
    }
    init();

    return () => {
      timer.current = null;
    }
  }, [])


  const onRegionChange = async (region) => {
    await dispatch(coordinateActions.clearPosition());
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(async () => {
      try {
        await dispatch(coordinateActions.fetchPosition(region));
      } catch (err) {
        console.log(err);
      }
    }, 2000);
  }

  const onbookingRequest = () => {
    setBookingModalVisible(true);
  }

  return (
      <View style={styles.container}>
        <MapView style={styles.fullScreenMap}
          initialRegion={initialRegion}
          onRegionChange={(region) => {
            onRegionChange(region);
          }}>
          {carLocations.map((carLocation, index) => {
            return (
              <MapView.Marker key={index} coordinate={carLocation}>
                <Animated.Image style={{
                  transform: [{
                    rotate: `${carLocation.rotation}deg`
                  }]
                }}
                  source={carImg}>
                </Animated.Image>
              </MapView.Marker>
            )
          })}
        </MapView>
        <LocationSearch position={position} />
        <LocationPin onClickBooking={() => {
          onbookingRequest();
        }} />
        <ClassSelection />
        <ConfirmationModal visible={bookingModalVisible}
          onClose={() => {
            setBookingModalVisible(false);
          }} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fullScreenMap: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0
  }
});
