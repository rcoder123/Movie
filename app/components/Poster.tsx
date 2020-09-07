import React from 'react';
import {Text, View} from 'react-native';
import Animated from 'react-native-reanimated';

import type MovieType from '@app/types/Movie';
import styles from './posterStyle';
interface PosterProps {
    movie: MovieType;
    borderRadius?: Animated.Value<number>;
}

const Poster = ({borderRadius, movie}: PosterProps) => {
    return (
        <>
            <Animated.Image
                source={{uri: movie.poster}}
                style={[styles.image, {borderRadius: borderRadius || 8}]}
            />
            <View style={styles.content}>
                <Text style={styles.name}>{movie.name}</Text>
                <Text style={styles.reviews}>{`Reviews: ${
                    movie.reviews?.length || 0
                }`}</Text>
            </View>
        </>
    );
};

export default Poster;
