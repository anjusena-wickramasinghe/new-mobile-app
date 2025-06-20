import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomtabnavigation from '../tab-navigation/HomeBottomtabnavigation';
import MyOrderTopTabNavigation from '../tab-navigation/MyOrderTopTabNavigation';
const stack = createStackNavigator();

export default function stackNavigator(){
return(
    <stack.Navigator>
        <stack.Screen name={'process'}
        options={{headerLeft:()=>null, headerShown:false}}
        
        component={HomeBottomtabnavigation}/>

        <stack.Screen name={'MyOrder'}
        options={{title:'MyOrder'}}
        
        component={MyOrderTopTabNavigation}/>
    </stack.Navigator>
)
}
