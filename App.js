import React from 'react'
import {
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'
const timer = require('react-native-timer')

export default class App extends React.Component {
  state = {
    imageURL: shameAssets.image,
  }

  onPressShameButton() {
    this.setState(
      {
        imageURL: shameAssets.gif,
      },
      () =>
        timer.setTimeout(
          this,
          'hideImg',
          () =>
            this.setState({
              imageURL: shameAssets.image,
            }),
          3500
        )
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{ uri: this.state.imageURL }}
          style={styles.shameImage}
        />
        <TouchableOpacity
          onPress={() => this.onPressShameButton()}
          style={styles.shameButton}
        >
          <Text style={styles.shameButtonText}>SHAME</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const shameAssets = {
  image:
    'https://pm1.narvii.com/6079/653d4ded88f5b358bb252a771c0d1c8e4215288c_hq.jpg',
  gif: 'https://media0.giphy.com/media/vX9WcCiWwUF7G/giphy.gif',
}

let { width } = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shameImage: {
    height: width / 1.5 - 32,
    width: width - 32,
    marginBottom: 32,
    borderRadius: 80,
  },
  shameButton: {
    height: 64,
    width: width - 64,
    backgroundColor: 'transparent',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(255, 255, 0, 0.5)',
    borderWidth: 3,
  },
  shameButtonText: {
    fontSize: 32,
    fontWeight: '800',
    color: 'rgba(255, 255, 0, 0.8)',
  },
})
