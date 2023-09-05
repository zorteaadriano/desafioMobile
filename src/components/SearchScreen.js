import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { fetchGitHubUser } from '../redux/actions.js';
import { styles } from '../assets/styles/styles.js';


function SearchScreen({ navigation, fetchGitHubUser }) {
  const [username, setUsername] = useState('');
  
  const handleSearch = () => {
    fetchGitHubUser(username).then(
      navigation.navigate('UserInfoScreen')
    );
  };

  return (
    <View style={[styles.pageContainer, {marginTop: 80}]}>
      <Text style={styles.pageTitle}>Find<Text style={{color: '#A0A4A8'}}> a dev</Text></Text>
      <TextInput
      style={styles.textInput}
        placeholder="Search a dev"
        onChangeText={(text) => setUsername(text)}
        value={username}
        autoCapitalize='none'
        placeholderTextColor={"#CACCCF"}

      />
      <Button title="Find" style={styles.button} uppercase={false} onPress={handleSearch} />

      
    </View>
  );
}
export default connect(null, { fetchGitHubUser })(SearchScreen);

