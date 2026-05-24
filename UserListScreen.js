import React from 'react';

import {
  View,
  Text,
  FlatList,
  Button,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

export default function UserListScreen({
  users,
  loading,
  error,
  deleteUser,
}) {
  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading users...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Error: {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Users</Text>

      <FlatList
        data={users}
        keyExtractor={(item) => item.email}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>
              {item.name.first} {item.name.last}
            </Text>

            <Text>{item.email}</Text>

            <Button
              title="Delete"
              onPress={() => deleteUser(item.email)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    marginTop: 50,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    padding: 15,
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 8,
  },
});