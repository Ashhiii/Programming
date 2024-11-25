import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

const DrawerLayout = () => {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <Drawer>
                <Drawer.Screen 
                    name="(tabs)" 
                    options={{
                        drawerLabel: 'Home',
                        title: 'Home', 
                        headerStyle: {
                            backgroundColor: 'rgba(0, 0, 255, 0.5)', 
                        },
                        headerTintColor: 'white',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Drawer.Screen 
                    name="help&support" 
                    options={{
                        drawerLabel: 'Help & Support',
                        title: 'Help & Support',  
                        headerStyle: {
                            backgroundColor: 'green',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Drawer.Screen 
                    name="aboutus" 
                    options={{
                        drawerLabel: 'About Us',
                        title: 'About Us',  
                        headerStyle: {
                            backgroundColor: 'purple',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Drawer>
        </GestureHandlerRootView>
    );
}
export default DrawerLayout;
