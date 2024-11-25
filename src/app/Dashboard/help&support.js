import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, ScrollView, Linking } from 'react-native';

const HelpSupport = () => {
    const handleContactPress = () => {
        Linking.openURL('mailto:support@example.com'); // Replace with your support email
    };

    const handleFAQPress = () => {
        Linking.openURL('https://example.com/faqs'); // Replace with your FAQ link
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.description}>
                    We’re here to help! Explore our FAQs or contact our support team for further assistance.
                </Text>
                <TouchableOpacity style={styles.card} onPress={handleFAQPress}>
                    <Text style={styles.cardTitle}>FAQs</Text>
                    <Text style={styles.cardDescription}>
                        Find answers to commonly asked questions and troubleshoot issues.
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card} onPress={handleContactPress}>
                    <Text style={styles.cardTitle}>Contact Us</Text>
                    <Text style={styles.cardDescription}>
                        Email us at <Text style={styles.link}>support@example.com</Text>.
                    </Text>
                </TouchableOpacity>
                <View style={styles.section}>
                    <Text style={styles.subheading}>Tips for Quick Assistance:</Text>
                    <Text style={styles.tip}>1. Restart your app or device.</Text>
                    <Text style={styles.tip}>2. Ensure you have the latest app version.</Text>
                    <Text style={styles.tip}>3. Check your internet connection.</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f4f8',
    },

    content: {
        padding: 20,
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        color: '#333',
    },
    card: {
        backgroundColor: '#ffffff',
        borderRadius: 8,
        padding: 15,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#4a90e2',
        marginBottom: 5,
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
    },
    link: {
        color: '#4a90e2',
        textDecorationLine: 'underline',
    },
    section: {
        marginTop: 20,
    },
    subheading: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    tip: {
        fontSize: 14,
        marginBottom: 5,
        color: '#555',
    },
});

export default HelpSupport;
