
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
  logoIcon:{
    width:140,
    height:140,
    zIndex:Platform.OS === 'ios' ? -1 : 0,
    marginTop:20,
    marginBottom:10
  },
  overlay:{
    position:'absolute',
    background:'red',
  },
  mainTitle:{
    fontSize: Sizer.fontSizer(30),
    paddingBottom:10,
    color: color.select.white,
  },
  formSubmit:{
    marginTop:30,
    flexDirection:'row',
    justifyContent:'center',
    alignItem:'center', 
  },
  submit:{
    borderRadius: 10,
    backgroundColor: color.select.primary,
    flexDirection:'row',
    justifyContent:'center',
    alignItem:'center', 
    padding:10,
    paddingLeft:20,
    paddingRight:20,
    maxWidth:'80%',
  },
  submitText:{
    color:color.select.white,
    fontSize:Sizer.fontSizer(20),
    fontWeight:'500'
  },
  dropdown:{
    width:200,  
  }
};
