import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Picker,
  ScrollView,
  ActivityIndicator
} from 'react-native';
import images from '../../assets/images/images';
import styles from './styles';
import { strings } from '../../utils/strings';
import color from '../../utils/color';
import { Actions } from 'react-native-router-flux';
import Helper from "../../utils/Helper";
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

class Feedback extends Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);
    this.state = {
      appName: '',
      email:'',
      appId:'',
      feedback:'',
      deviceName:'',
      feedbackText:'',
      country:'',
      isLoading:false,
      listOfBugs:[
        "Video streaming",
        "Launching The App",
        "Downloading / installing the app",
        "App crashing / freezing / force closing",
        "Signing in to the app",
        "Updating the app",
        "Purchasing in-app content",
        "notMentionedInList-1",
      ]
    };
  }
  submitFeedback = ()=>{
  
    if(this.state.email ===''){
      Helper.showTopErrorMessage('Email is required field','danger');
      return;
    } else if(!emailRegex.test(this.state.email)){
      Helper.showTopErrorMessage('Email is not valid','danger');
      return;
    } else if(this.state.appName ===''){
      Helper.showTopErrorMessage('App Name is required field','danger');
      return;
    }  
    else if(this.state.appId ===''){
      Helper.showTopErrorMessage('App ASIN is required field','danger');
      return;
    }  
    else if(this.state.deviceName ===''){
      Helper.showTopErrorMessage('Device Name is required field','danger');
      return;
    }  
    else if(this.state.country ===''){
      Helper.showTopErrorMessage('Country is required field','danger');
      return;
    }  
    else if(this.state.feedback==='notMentionedInList-1' && this.state.feedbackText==''){
      Helper.showTopErrorMessage('Please mention Feedback','danger');
      return;
    } 
    this.sendApiCall() 
  }
  sendApiCall = () =>{
    this.setState({isLoading:true});
    setTimeout(() => {
      let data = {}
      data.email = this.state.email;
      data.appName = this.state.appName;
      data.appId = this.state.appId;
      data.deviceName = this.state.deviceName;
      data.country = this.state.country;
      data.feedback = this.state.feedback === 'notMentionedInList-1' ? this.state.feedbackText:this.state.feedback;
      this.setState({isLoading:false});
      Actions.Thanks()
    }, 1500);
  }

  render() {
    let { listOfBugs,feedback,isLoading } =  this.state;
    return (
      <ImageBackground
        accessibilityRole={'image'}
        source={images.theme1.mainBackground}
        style={styles.background}
        imageStyle={styles.logo}>
        {isLoading?
        <View style={{position:'absolute',flex:1,top:0,left:0,right:0,bottom:0,justifyContent:'center',alignItems:'center',backgroundColor:'rgba(0,0,0,0.8)',zIndex:10}}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
        :null}
        <KeyboardAvoidingView behavior={"padding"}>
          <ScrollView showsHorizontalScrollIndicator={false}>
          <View style={[styles.formControl]}>
            <Image
              style={styles.imageIconEmail}
              source={images.theme1.emailIcon}
            />
            <TextInput
              style={styles.input}
              placeholder={strings.FeedbackEmail}
              keyboardType={'email-address'}
              autoCapitalize="none"
              placeholderTextColor={color.select.white}
              onChangeText={text => this.setState({email: text})}
            />
          </View>
          <View style={styles.formControl}>
            <Image style={styles.imageIcon} source={images.theme1.appIcon} />
            <TextInput
              style={styles.input}
              placeholder={strings.FeedbackAppName}
              autoCapitalize="none"
              placeholderTextColor={color.select.white}
              onChangeText={text => this.setState({appName: text})}
            />
          </View>
          <View style={styles.formControl}>
          <Image style={styles.imageIcon} source={images.theme1.numberIcon} />
            <TextInput
              style={styles.input}
              placeholder={strings.FeedbackAppId}
              autoCapitalize="none"
              placeholderTextColor={color.select.white}
              onChangeText={text => this.setState({appId: text})}
            />
          </View>
          <View style={styles.formControl}>
          <Image style={styles.imageIcon} source={images.theme1.appIcon} />
            <TextInput
              style={styles.input}
              placeholder={strings.FeedbackDeviceName}
              autoCapitalize="none"
              placeholderTextColor={color.select.white}
              onChangeText={text => this.setState({deviceName: text})}
            />
          </View>
          <View style={styles.formControl}>
          <Image style={styles.imageIcon} source={images.theme1.country} />
            <TextInput
              style={styles.input}
              placeholder={strings.FeedbackCountry}
              autoCapitalize="none"
              placeholderTextColor={color.select.white}
              onChangeText={text => this.setState({country: text})}
            />
          </View>
          <View style={{flexDirection:'row',alignItems:'center',marginTop:20}}>
            <Image style={styles.imageIcon} source={images.theme1.feedbackIcon} />
            <Text style={styles.label}>{strings.Feedback}</Text>
          </View>
          <View style={[styles.formControl,{marginTop:0}]}>
          <Picker
            selectedValue={this.state.feedback}
            style={styles.dropdown}
            mode={'dropdown'}
            imageButton={images.theme1.appIcon}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({feedback: itemValue})
            }>
              {
                listOfBugs.map((item,index)=>{
                  return(
                    <Picker.Item key={index} label={item==='notMentionedInList-1'?'Other':item} value={item} />
                  )
                })
              }
          </Picker>
          </View>

          {feedback==='notMentionedInList-1'? <View style={styles.formControl}>
            <Image style={styles.imageIcon} source={images.theme1.numberIcon} />
            <TextInput
              style={styles.input}
              placeholder={'Please mention'}
              autoCapitalize="none"
              placeholderTextColor={color.select.white}
              onChangeText={text => this.setState({feedbackText:text})}
            />
          </View>:null}
          <View style={[styles.formSubmit,{paddingBottom:50}]}>
            <TouchableOpacity
              style={styles.submit}
              onPress={() => {
                this.submitFeedback();
              }}>
              <Text style={styles.submitText}>{strings.Submit}</Text>
            </TouchableOpacity>
          </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

export default Feedback;
