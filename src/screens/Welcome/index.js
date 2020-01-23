import React, {Component} from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import images from '../../assets/images/images';
import styles from './styles';
import {strings} from '../../utils/strings';
import color from '../../utils/color'

class Welcome extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
    };
  }
  nextPage = () =>{
    Actions.Feedback();

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
            marginBottom: 50,
            marginTop: 50,
          }}>
          <Image
            style={styles.logoIcon}
            source={images.theme1.amazonLogo}
          />
          <Text style={[styles.mainTitle,{color:color.select.primary}]}>{strings.HeadTitleWelcome}</Text>
          <Text style={styles.mainTitle}>{strings.HeadTitle}</Text>
        </View>

       
        <View style={styles.formSubmit}>
          <TouchableOpacity
            style={styles.submit}
            onPress={() => {
              this.nextPage();
            }}>
            <Text style={styles.submitText}>{strings.mainCta}</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

export default Welcome;
