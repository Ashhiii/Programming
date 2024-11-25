import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useRouter } from 'expo-router';

const Register = () => { 
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    gender: '',
    password: '',
    confirmPassword: ''
  });
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDateChange = (event, date) => {
    setShowDatePicker(false);
    if (date) {
      setSelectedDate(date);
      setFormData({ ...formData, birthDate: date.toISOString().split('T')[0] }); 
    }
  };

  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.header}>Sign Up</Text>
        <ScrollView>
          <TextInput
            style={styles.inputSingle}
            placeholder="First Name"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            value={formData.firstName}
            onChangeText={(text) => setFormData({ ...formData, firstName: text })}
          />
          <TextInput
            style={styles.inputSingle}
            placeholder="Last Name"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            value={formData.lastName}
            onChangeText={(text) => setFormData({ ...formData, lastName: text })}
          />
          <TextInput
            style={styles.inputSingle}
            placeholder="Email Address"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            value={formData.email}
            onChangeText={(text) => setFormData({ ...formData, email: text })}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.inputSingle}
            placeholder="Phone Number"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            value={formData.phone}
            onChangeText={(text) => setFormData({ ...formData, phone: text })}
            keyboardType="phone-pad"
          />

          {/* Birth Date and Gender side by side */}
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.inputIconContainer}
              onPress={() => setShowDatePicker(true)}
            >
              <Icon name="calendar" size={20} color="rgba(255, 255, 255, 0.7)" style={styles.icon} />
              <TextInput
                style={styles.inputWithIcon}
                placeholder="Birth Date"
                placeholderTextColor="rgba(255, 255, 255, 0.7)"
                value={formData.birthDate}
                editable={false} // disable editing; only set via date picker
              />
            </TouchableOpacity>
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={formData.gender}
                onValueChange={(itemValue) => setFormData({ ...formData, gender: itemValue })}
                style={styles.picker}
              >
                <Picker.Item label="Select Gender" value="" color="black" />
                <Picker.Item label="Male" value="male" color="black" />
                <Picker.Item label="Female" value="female" color="black" />
                <Picker.Item label="Other" value="other" color="black" />
              </Picker>
            </View>
          </View>
          {showDatePicker && (
            <DateTimePicker
              value={selectedDate}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleDateChange}
            />
          )}

          <TextInput
            style={styles.inputSingle}
            placeholder="Password"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            value={formData.password}
            onChangeText={(text) => setFormData({ ...formData, password: text })}
            secureTextEntry
          />
          <TextInput
            style={styles.inputSingle}
            placeholder="Confirm Password"
            placeholderTextColor="rgba(255, 255, 255, 0.7)"
            value={formData.confirmPassword}
            onChangeText={(text) => setFormData({ ...formData, confirmPassword: text })}
            secureTextEntry
          />
        </ScrollView>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              router.back('index'); 
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                birthDate: '',
                gender: '',
                password: '',
                confirmPassword: ''
              });  
            }}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
    alignItems: 'center',
  },
  container: {
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.13)',
    borderRadius: 10,
    paddingBottom: 30,
    top: 15,
    width: '95%',
    left: 1.5,
  },
  header: {
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  inputIconContainer: {
    position: 'relative',
    width: '49%',
  },
  icon: {
    position: 'absolute',
    left: 10,
    top: 15,
  },
  inputWithIcon: {
    height: 50,
    borderColor: 'white',
    borderWidth: 2,
    paddingLeft: 40, 
    color: 'white',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.13)',
  },
  pickerContainer: {
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.13)',
    width: '49%',    
  },
  picker: {
    height: 50,
    color: 'white',
  },
  inputSingle: {
    height: 50,
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: 20,
    paddingHorizontal: 10,
    color: 'white',
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.13)',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Register;
