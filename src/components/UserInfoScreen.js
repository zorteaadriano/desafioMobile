import React from 'react';
import { View, Text, ScrollView, Image, Button } from 'react-native';
import { connect, useSelector } from 'react-redux'
import { styles } from '../assets/styles/styles';
import { theme } from '../assets/styles/theme';
import { fetchGitHubUserRepos } from '../redux/actions';

const userState = state => state.user

function UserInfoScreen({ navigation, fetchGitHubUserRepos }) {
  const user = useSelector(userState);
  
  const handleSearchRepos = () => {
    fetchGitHubUserRepos(user.login).then(
      navigation.navigate('RepositoriesScreen')
    );
  };

  if (user) {
    return (
      <ScrollView style={{ flex: 1}}>
        {user.avatar_url && <Image source={{ uri: user.avatar_url }} style={styles.avatarInfo}/>}
        <View style={[styles.pageContainer, {paddingVertical: 0}]}>
          <Text style={styles.nameInfo}>
            {user.name}
          </Text>
          {user.email && <Text style={styles.emailInfo}>{`\u2022 `+ user.email}</Text>}
          <Text style={styles.bioInfo}>{user.bio}</Text>
          <View style={styles.containerFollowInfo}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: theme.gray }}>Followers</Text>
              <Text style={ styles.coloredNumber }>
                {user.followers}
              </Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: theme.gray }}>Following</Text>
              <Text style={ styles.coloredNumber}>
                {user.following}
              </Text>
            </View>
          </View>
          <Button title="See repositories" uppercase={false} onPress={handleSearchRepos} />

        </View>
      </ScrollView>
    );
  }
}

export default connect(null, { fetchGitHubUserRepos })(UserInfoScreen);