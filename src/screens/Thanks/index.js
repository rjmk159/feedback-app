import React, {Component} from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
} from 'react-native';
import images from '../../assets/images/images';
import styles from './styles';
import {strings} from '../../utils/strings';

class Login extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }

  render() {
    return (
      <ImageBackground
        accessibilityRole={'image'}
        source={images.theme1.mainBackground}
        style={styles.background}
        imageStyle={styles.logo}>
        <View style={styles.overlay} />
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 10,
            marginTop: 50,
          }}>
          <Image
            style={styles.logoIcon}
            source={images.theme1.thanks}
          />
          <Text style={styles.mainTitle}>{strings.FeedbackHeading}</Text>
          <Text style={styles.description}>{strings.FeedbackDescription}</Text>
        </View>
      </ImageBackground>
    );
  }
}

export default Login;
