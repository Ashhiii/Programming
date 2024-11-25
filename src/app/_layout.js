import React from 'react';
import { Stack } from 'expo-router';

const Layout = () => {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Dashboard" />
            <Stack.Screen name="index" />
            <Stack.Screen name="Register" />
            <Stack.Screen name="ForgotPass" />
        </Stack>
    )
}
export default Layout;
