import React from 'react';
import Welcome from './src/screens/Welcome'
import Feedback from './src/screens/Feedback'
import Thanks from './src/screens/Thanks'
import {Router,Stack,Scene} from 'react-native-router-flux'



class App extends React.Component{

 render(){
   return(
    //  <Welcome/>
    // <Feedback/>
    // <Thanks/>
    <Router>
    <Stack key="root">
      <Scene key="welcome" component={Welcome} />
      <Scene key="Feedback" component={Feedback} />
      <Scene key="Thanks" component={Thanks} />
    </Stack>
  </Router>
   )
 }

}

export default App;
