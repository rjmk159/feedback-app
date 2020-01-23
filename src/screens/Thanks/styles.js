
import color from '../../utils/color'
import Sizer from '../../utils/sizer'
import { Dimensions,Platform } from "react-native";
const deviceHeight = Dimensions.get('window').height;


export default {
  background: {
    paddingBottom: 40,
    paddingTop: 60,
    paddingHorizontal: 32,
    backgroundColor: color.select.lighter,
    height:deviceHeight,
    position:'relative'
  },
  logo: {
    overflow: 'visible',
    resizeMode: 'cover',
    flex:1,
    marginLeft: 0,
    marginBottom: -192,
  },
  overlay:{
    position:'absolute',
    background:'red',
  },
  logoIcon:{
    width:210,
    height:210,
    zIndex:Platform.OS === 'ios' ? -1 : 0,
    marginTop:20,
    marginBottom:30
  },
  mainTitle:{
    fontSize: Sizer.fontSizer(25),
    paddingBottom:10,
    color: color.select.white,
  },
  description:{
    fontSize: Sizer.fontSizer(15),
    paddingBottom:10,
    color: color.select.white,
    textAlign:'center'
  },
  
};
