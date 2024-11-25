import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, Alert, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router'; 


const SettingsCard = ({ isDarkMode, toggleSwitch }) => {
    const router = useRouter();
    const handleSignOut = () => {
      Alert.alert("Sign Out", "Are you sure you want to sign out?", [
        {
          text: "Cancel",
          style: "cancel",
        },
        { 
          text: "OK", 
          onPress: () => {
            console.log("Signed out");
            router.replace('/'); 
          } 
        },
      ]);
    };
  

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <View style={[styles.containers, isDarkMode && styles.darkContainers]}>
        <Image
          source={require('../../../assets/profile.png')}
          style={styles.image}
        />
        <View style={styles.joinedContainer}>
          <Text style={[styles.nameText, isDarkMode && styles.darkText]}>Jefferson De La Pena</Text>
          <View style={styles.statusContainer}>
            <Text style={[styles.statusText, isDarkMode && styles.darkText]}>Just Joined</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={[styles.header, isDarkMode && styles.darkText]}>Profile</Text>
        <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
          <Icon name="person" size={24} color={isDarkMode ? "white" : "gray"} />
          <Text style={[styles.item, isDarkMode && styles.darkText]}>Manage user</Text>
          <Icon name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "gray"} />
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={[styles.header, isDarkMode && styles.darkText]}>Settings</Text>
        <TouchableOpacity style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
          <Icon name="notifications" size={24} color={isDarkMode ? "white" : "gray"} />
          <Text style={[styles.item, isDarkMode && styles.darkText]}>Notifications</Text>
          <Icon name="chevron-forward-outline" size={24} color={isDarkMode ? "white" : "gray"} />
        </TouchableOpacity>
        <View style={[styles.rowWithBackground, isDarkMode ? styles.darkRow : styles.lightRow]}>
          <Icon name="moon" size={24} color={isDarkMode ? "white" : "gray"} />
          <Text style={[styles.item, isDarkMode && styles.darkText]}>Dark Mode</Text>
          <Switch
            trackColor={{ false: "#767577", true: "#81C784" }}
            thumbColor={isDarkMode ? "#f4f3f4" : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={isDarkMode}
          />
        </View>
      </View>

      <TouchableOpacity style={[styles.signOutButton, isDarkMode && styles.darkSignOutButton]} onPress={handleSignOut}>
        <Text style={[styles.signOutText, isDarkMode && styles.darkSignOutText]} onPress={() => router.replace('/')}> Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  containers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '120%',
    right: 20,
    top: -20,
    backgroundColor: '#A8E6CF',
  },
  darkContainers: {
    backgroundColor: '#37474F',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
    margin: 10,
    backgroundColor: 'gray', 
    borderColor: '#E0E0E0',
    borderWidth: 2,
  },
  joinedContainer: {
    flex: 1,
  },
  nameText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#263238',
    paddingTop: 15,
  },
  darkText: {
    color: '#E0E0E0',
  },
  statusContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  statusText: {
    fontSize: 14,
    color: '#6D6D6D',
  },

  container: {
    padding: 20,
    backgroundColor: '#F7F7F7',
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 20,
  },
  darkContainer: {
    backgroundColor: '#1C1C1E',
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
  },
  section: {
    marginBottom: 0,
  },
  rowWithBackground: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
  },
  lightRow: {
    backgroundColor: '#FFFFFF',
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  darkRow: {
    backgroundColor: '#2C2C2E',
  },
  header: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 37,
    top: 30,
    color: '#000',
  },
  item: {
    fontSize: 16,
    color: '#263238',
    flex: 1,
    marginLeft: 10,
  },
  signOutButton: {
    marginTop: 10,
    paddingVertical: 15,
    backgroundColor: '#A8E6CF',
    borderRadius: 10,
    alignItems: 'center',
  },
  darkSignOutButton: {
    backgroundColor:'#37474F',
  },
  signOutText: {
    fontSize: 18,
    color:'black',
    fontWeight: 'bold',
  },
  darkSignOutText: {
    fontSize: 18,
    color:'white',
    fontWeight: 'bold',
  },
});

export default SettingsCard;
