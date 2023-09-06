import React, { useState, useRef } from 'react';
import { View, Text, FlatList, Image, Linking, ScrollView, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from '../assets/styles/styles';
import { theme } from '../assets/styles/theme';
import SelectDropdown from 'react-native-select-dropdown';
import Icon from 'react-native-vector-icons/MaterialIcons'; 
import ProjectDetails from './ProjectDetails';
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const userState = (state) => state.user;
const reposState = (state) => state.repos;


const customRowItem = (item, index, props, state) => (
  <TouchableOpacity
    key={index}
    style={styles.optionSelector}
  >
    <Text style={styles.dropdownTextStyle}>{item}</Text>
  </TouchableOpacity>
);


const RepositoriesScreen = ({ route }) => {
  const bottomSheetRef = useRef(null);
  const user = useSelector(userState);
  const repos = useSelector(reposState);

  const [selectedProject, setSelectedProject] = useState(null);
  const [sortBy, setSortBy] = useState('created');

  const toggleSort = (value) => {
    setSortBy(value);
    sortRepos();
  };

  const closeWithAnimation = () => {
    bottomSheetRef.current.close();
    setSelectedProject(null);
  };

  const onProjectPress = (project) => {
    setSelectedProject(project);
  };

  const sortRepos = () => {
    if (repos) {
      switch (sortBy) {
        case 'stars':
          return repos.slice().sort((a, b) => b.stargazers_count - a.stargazers_count);
        case 'forks':
          return repos.slice().sort((a, b) => b.forks_count - a.forks_count);
        case 'alphabetical':
          return repos.slice().sort((a, b) => b.name.localeCompare(a.name));
        case 'created':
          return repos.slice().sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        case 'updated':
          return repos.slice().sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        default:
          return repos;
      }
    }
    return [];
  };

  const customRowItem = (item, index, props, state) => (
    <TouchableOpacity
      key={index}
      onPress={() => toggleSort(item.toLowerCase())}
      style={styles.optionSelector}
    >
      <Text style={styles.dropdownTextStyle}>{item}</Text>
    </TouchableOpacity>
  );
  
  

  const renderRepositoryItem = ({ item }) => (
    <TouchableOpacity onPress={() => onProjectPress(item)}>
      <View style={styles.repositoryCard}>
        <Image
          source={{ uri: item.owner.avatar_url }}
          style={styles.repositoryImage}
        />
        <View style={styles.repositoryInfo}>
          <Text style={styles.repositoryTitle}>{item.name}</Text>
          <Text style={styles.repositoryDescription}>{item.description}</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop: 10}}>
            <View style={styles.repoInfoContainer}>
              <Icon name="language" size={20} style={styles.iconRepo} />
              <Text>{item.language}</Text>
            </View>

            <View style={styles.repoInfoContainer}>
              <Icon name="star" size={20} style={styles.iconRepo} />
              <Text>{item.stargazers_count}</Text>
            </View>

            <View style={styles.repoInfoContainer}>
              <Icon name="call-split" size={20} style={styles.iconRepo} />
              <Text>{item.forks_count}</Text>
            </View>

            <View style={styles.repoInfoContainer}>
              <Icon name="lock" size={20} style={styles.iconRepo} />
              <Text>
                {item.private ? 'Private' : 'Public'}
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    </TouchableOpacity>
  );

  if (repos) {
    const sortedRepos = sortRepos();
    return (
      <View style={[styles.pageContainer, styles.pageContainerRepos]}>
        <SelectDropdown
            data={['Stars', 'Forks', 'Alphabetical', 'Created', 'Updated']}
            onSelect={(selectedItem, index) => toggleSort(selectedItem.toLowerCase())}
            defaultButtonText={sortBy}
            buttonTextAfterSelection={(selectedItem, index) => selectedItem.toLowerCase()}
            rowTextForSelection={(item, index) => item}
            buttonStyle={styles.dropdownButton}
            buttonTextStyle={styles.dropdownButtonText}
            // dropdownTextStyle={styles.dropdownButtonText}
            renderCustomizedRowChild={customRowItem}
            renderDropdownIcon={() => (
              <Icon name="swap-vert" size={20} color={theme.colors.lightBlue} />
            )}/>
        
        <FlatList
          data={sortedRepos}
          renderItem={renderRepositoryItem}
          keyExtractor={(item) => item.id.toString()}
        />

        {selectedProject && (

        <BottomSheet
          ref={bottomSheetRef}
          snapPoints={['50%']}
          enablePanDownToClose
          onClose={() => closeWithAnimation()}
          style={{
            shadowColor: "#333",
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 5, // Para Android
          }}
          >
          <BottomSheetView style={styles.bottomSheetView}>
            <ProjectDetails project={selectedProject} />
          </BottomSheetView>
        </BottomSheet>
        )}
      </View>
    );
  }
};

export default RepositoriesScreen;
