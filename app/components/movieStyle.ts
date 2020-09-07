import memoize from 'memoize-one';
import {StyleSheet} from 'react-native';
import colors from '@utils/colors';
const getStyles = memoize((width: number, height: number) =>
    StyleSheet.create({
        container: {
            width: width - 32,
            height: height / 2,
            alignSelf: 'center',
            borderRadius: 8,
            marginVertical: 8,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            borderWidth: 1,
            borderColor: colors.border,
        },
        content: {
            position: 'absolute',
            padding: 16,
            paddingTop: 20,
            borderRadius: 8,
            backgroundColor: colors.backgroundTransparent,
            width: '100%',
        },
        name: {
            color: 'white',
            fontSize: 34,
            lineHeight: 41,
            fontWeight: 'bold',
            textShadowColor: colors.black,
            textShadowOffset: {
                width: 1,
                height: 2,
            },
            textShadowRadius: 2,
        },
        reviews: {
            color: 'white',
            fontSize: 18,
            textShadowColor: colors.black,
            textShadowOffset: {
                width: 1,
                height: 2,
            },
            textShadowRadius: 2,
        },
        image: {
            ...StyleSheet.absoluteFillObject,
            width: undefined,
            height: undefined,
        },
    }),
);

export default getStyles;
