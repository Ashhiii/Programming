import React from 'react';
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native';

const AboutUs = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Image
                    source={require('../../assets/profile.png')}
                    style={styles.logo}
                />
                <Text style={styles.description}>
                    Welcome to our app! We are dedicated to providing solutions that empower individuals and communities to make a positive impact on the environment. Our mission is to create a sustainable future for everyone.
                </Text>
                <View style={styles.section}>
                    <Text style={styles.subheading}>Our Mission</Text>
                    <Text style={styles.text}>
                        To inspire and enable people to take action towards a cleaner, greener, and more sustainable planet.
                    </Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subheading}>Our Values</Text>
                    <Text style={styles.text}>🌱 Sustainability</Text>
                    <Text style={styles.text}>🤝 Community Engagement</Text>
                    <Text style={styles.text}>💡 Innovation</Text>
                    <Text style={styles.text}>🌍 Global Responsibility</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.subheading}>Contact Us</Text>
                    <Text style={styles.text}>
                        Email: <Text style={styles.link}>contact@example.com</Text>
                    </Text>
                    <Text style={styles.text}>
                        Phone: <Text style={styles.link}>+1 234 567 890</Text>
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },

    content: {
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 20,
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    section: {
        marginBottom: 20,
    },
    subheading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#4caf50',
    },
    text: {
        fontSize: 14,
        color: '#555',
        marginBottom: 5,
    },
    link: {
        color: '#4caf50',
        textDecorationLine: 'underline',
    },
});

export default AboutUs;