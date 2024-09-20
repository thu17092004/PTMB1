import React from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

const TextInputExample = () => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Đăng nhập</Text>
      </View>
      <Text style={styles.label}>Nhập số điện thoại</Text>
      <Text style={styles.description}>
        Dùng số điện thoại để đăng nhập hoặc đăng ký tài khoản tại OneHousing Pro
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Nhập số điện thoại của bạn"
        keyboardType="phone-pad"
        maxLength={10}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Tiếp tục</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#f2f2f2',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#666',
  },
});

export default TextInputExample;
