
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { connect, useSelector } from 'react-redux'
import { styles } from '../assets/styles/styles';

const userState = state => state.user
const reposState = state => state.repos

const RepositoriesScreen = ({ route }) => {
  const user = useSelector(userState);
  const repos = useSelector(reposState);
  
  const renderRepositoryItem = ({ item })  => (
    <View style={{ padding: 16, borderBottomWidth: 1, borderBottomColor: '#ddd' }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
    </View>
  );
  
  console.log(repos);
  if(repos){
    return (
      <View style={[styles.pageContainer, {marginTop: 80}]}>
        <FlatList
          data={repos}
          renderItem={renderRepositoryItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    );
  }
  
};

export default RepositoriesScreen;