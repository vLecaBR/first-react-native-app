import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import Principal from "./Principal";
import Consultas from "./Consultas";
import Perfil from "./Perfil";
import Explorar from "./Explorar";


const Tab = createBottomTabNavigator()

export default function Tabs(){
    return(
        <Tab.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: "#002851"
                },
                tabBarActiveTintColor: "#339cff",
                tabBarInactiveTintColor: "#fff"
            }}
        >
            <Tab.Screen 
            name="Principal"
            component={Principal}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home" color={color} size={size} />
                )
            }}
            />
            <Tab.Screen 
            name="Consultas"
            component={Consultas}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="calendar" color={color} size={size} />
                )
            }}
            />
            <Tab.Screen 
            name="Explorar"
            component={Explorar}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="search" color={color} size={size} />
                )
            }}
            />
            <Tab.Screen 
            name="Perfil"
            component={Perfil}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="person" color={color} size={size} />
                )
            }}
            />
        </Tab.Navigator>
    )
}