import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Cast} from '../interfaces/creditsInterfaces';

interface Props {
  actor: Cast;
}

const CastItem = ({actor}: Props) => {
  const {name, character, profile_path} = actor;
  const uri = `https://image.tmdb.org/t/p/w500${profile_path}`;
  return (
    <View style={styles.container}>
      {profile_path && (
        <Image
          source={{uri}}
          style={{width: 60, height: 60, borderRadius: 10}}
        />
      )}
      <View style={styles.actorInfo}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>{name}</Text>
        <Text style={{fontSize: 16, opacity: 0.7}}>{character}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    shadowColor: '#008',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 30,
    paddingRight: 15,
    height: 60,
  },
  actorInfo: {
    marginLeft: 10,
    marginTop: 4,
  },
});

export default CastItem;
