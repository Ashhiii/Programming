import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const AdminDashboard = () => {
  const router = useRouter();
  const [reports, setReports] = useState([
    { id: 1, title: 'Illegal Dumping', status: 'Pending', date: '2024-11-10' },
    { id: 2, title: 'Tree Cutting', status: 'Approved', date: '2024-11-09' },
    { id: 3, title: 'Air Pollution', status: 'Rejected', date: '2024-11-08' },
  ]);

  const renderInfoCard = (iconName, title, count, color) => (
    <View style={[styles.infoCard, { backgroundColor: color }]}>
      <Ionicons name={iconName} size={30} color="white" />
      <Text style={styles.infoCount}>{count}</Text>
      <Text style={styles.infoTitle}>{title}</Text>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.container}>
      <View style={styles.cardsContainer}>
        <TouchableOpacity style={styles.report}>
          {renderInfoCard('document-text-outline', 'Total Reports', 120, '#6a11cb')}
        </TouchableOpacity>
        <TouchableOpacity style={styles.pending}>
          {renderInfoCard('time-outline', 'Pending Reports', 15, '#ffb347')}
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          {renderInfoCard('checkmark-done-outline', 'Approved Reports', 95, '#43a047')}
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          {renderInfoCard('close-outline', 'Rejected Reports', 10, '#d32f2f')}
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recent Reports</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View All</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={reports}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.reportCard}
          onPress={() => router.push('ReportDetails', { report: item })}
        >
          <View>
            <Text style={styles.reportTitle}>{item.title}</Text>
            <Text style={styles.reportDate}>{item.date}</Text>
          </View>
          <MaterialIcons name="chevron-right" size={24} color="gray" />
        </TouchableOpacity>
      )}
      contentContainerStyle={{ paddingBottom: 20 }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7',
    paddingTop: 20, 
  },
  report: {
    width: '50%',
    padding: 15,
    borderRadius: 15,
    marginTop: -15,
    alignItems: 'center',
    left: 5,
  },
  pending: {
    width: '50%',
    padding: 15,
    borderRadius: 15,
    marginTop: -15,
    alignItems: 'center',
    right: 2,
  },
  
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginVertical: 10,
  },

  infoCard: {
    width: '100%',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: 'center',
  },
  infoCount: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  infoTitle: {
    fontSize: 14,
    color: 'white',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  viewAllText: {
    color: '#6a11cb',
  },
  reportCard: {
    backgroundColor: '#ffffff',
    padding: 15,
    marginHorizontal: 20,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  reportDate: {
    color: '#999',
  },
});

export default AdminDashboard;
