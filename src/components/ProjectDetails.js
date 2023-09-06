import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from '../assets/styles/styles';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import { Linking } from 'react-native';

const ProjectDetails = ({ project }) => {
  return (
    <View style={[styles.bottomSheetContainer]}>
      <Text style={styles.bottomSheetTitle}>{project.name}</Text>
      <TouchableOpacity
        onPress={() => Linking.openURL(project.html_url)}
      >
        <Text style={styles.openGithubButton}>Open on Github</Text>
      </TouchableOpacity>
      <Text style={styles.bottomSheetText}>{project.description}</Text>

      {project.language && (
        <View style={styles.repoInfoContainer}>
          <Icon name="language" size={20} style={styles.iconRepo} />
          <Text style={{ marginRight: 10 }}>{project.language}</Text>
        </View>
      )}

      {project.stargazers_count !== null && project.stargazers_count !== undefined && (
        <View style={styles.repoInfoContainer}>
          <Icon name="star" size={20} style={styles.iconRepo} />
          <Text>{project.stargazers_count} Stars</Text>
        </View>
      )}

      {project.forks_count !== null && project.forks_count !== undefined && (
        <View style={styles.repoInfoContainer}>
          <Icon name="call-split" size={20} style={styles.iconRepo}/>
          <Text>{project.forks_count} Forks</Text>
        </View>
      )}

     

      {project.open_issues_count !== null && project.open_issues_count !== undefined && (
        <View style={styles.repoInfoContainer}>
          <Icon name="info-outline" size={20} style={styles.iconRepo} />
          <Text>{project.open_issues_count} Issues</Text>
        </View>
      )}

      {project.pull_requests_count !== null && project.pull_requests_count !== undefined && (
        <View style={styles.repoInfoContainer}>
          <Icon name="get-app" size={20} style={styles.iconRepo} />
          <Text>{project.pull_requests_count} Pull Requests</Text>
        </View>
      )}

      {project.branches_count !== null && project.branches_count !== undefined && (
        <View style={styles.repoInfoContainer}>
          <Icon name="source-branch" size={20} style={styles.iconRepo} />
          <Text>{project.branches_count} Branches</Text>
        </View>
      )}

      {project.private !== null && project.private !== undefined && (
        <View style={styles.repoInfoContainer}>
          <Icon name="lock" size={20} style={styles.iconRepo} />
          <Text>
            {project.private ? 'Private' : 'Public'} Repository
          </Text>
        </View>
      )}
    </View>
    );
  };
  
  export default ProjectDetails;