import React, {useRef} from 'react';
import {useWindowDimensions, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Animated, {cond, eq} from 'react-native-reanimated';
import Poster from './Poster';
import getStyles from './movieStyle';
import type MovieType from '@app/types/Movie';
import type PositionType from '@app/types/Position';

interface MovieProps {
    activeMovieId: Animated.Value<number>;
    index: number;
    movie: MovieType;
    open: (index: number, movie: MovieType, position: PositionType) => void;
}

interface Meassure {
    (x: number, y: number, width: number, height: number): void;
}

interface AnimatedView extends Animated.View {
    measureInWindow(cb: Meassure): void;
}

const measure = (ref: View): Promise<PositionType> =>
    new Promise((resolve) =>
        ref.measureInWindow((x, y, width, height) =>
            resolve({
                x,
                y,
                width,
                height,
            }),
        ),
    );

const Movie = ({activeMovieId, index, movie, open}: MovieProps) => {
    const container = useRef<AnimatedView>(null);
    const {width, height} = useWindowDimensions();
    const styles = getStyles(width, height);
    const startTransition = async () => {
        if (container.current) {
            const position = await measure(container.current.getNode());
            open(index, movie, position);
        }
    };

    console.log('RENDER MOVIE', movie.name);
    //Put a check if we don't fine moive name then we will return to null
    if (movie.name === undefined || movie.name === null) {
        return null;
    }

    return (
        <TouchableWithoutFeedback onPress={startTransition}>
            <Animated.View
                ref={container}
                style={[
                    styles.container,
                    {opacity: cond(eq(activeMovieId, index), 0, 1)},
                ]}>
                <Poster movie={movie} />
            </Animated.View>
        </TouchableWithoutFeedback>
    );
};

export default Movie;
