import { colors } from '@utils/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  content: {
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
    flex: 1,
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
})

export default styles
