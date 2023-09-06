import { StyleSheet } from 'react-native';
import { theme } from './theme';

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 20,
  },
  profileImage: {
      width: 40,
      height: 40,
      borderRadius: 20,
  },
  pageContainer: {
      flex: 1,
      paddingHorizontal: 24,
      paddingVertical: 30,
      elevation: 0,
      shadowOpacity:0,
      marginTop:0,
      backgroundColor: '#fff'
  },

  pageContainerRepos:{
    paddingHorizontal: 0,
    paddginVertical: 0,
    marginVertical: 0,
    marginBottom: 0,
    paddingBottom: 0,
    marginTop: 60,
  },
  pageTitle:{
      fontSize: 34,
      fontWeight: '400',
      color: theme.colors.black,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  textInput: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 18,
    marginVertical: 24,
    backgroundColor: theme.colors.lightGray,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  searchButton: {
    borderRadius: 30,
    padding: 10,
    marginLeft: 10,
  },
  button:{
    color: '#fff',
    fontSize: 18,
    fontWeight: 700,
    borderRadius: 8,
    height: 56,
    backgroundColor: theme.colors.blue,
    textTransform: 'capitalise',
  },
  avatarInfo: { width: '100%', height: 360, marginTop:0 },
  nameInfo: { fontSize: 24, fontWeight: 'bold', marginTop: 16},
  emailInfo: { fontSize: 14,  fontWeight: 'normal', marginVertical: 10, color: theme.colors.gray },
  bioInfo: { flex:1, textAlign: 'left', fontSize: 16, color: theme.colors.gray },
  containerFollowInfo: {  flexDirection: 'row',
  justifyContent: 'space-around',
  marginVertical: 20},
  coloredNumber: {fontSize: 18, fontWeight: 'bold', color: theme.lightBlue},
  repositoryCard: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  repositoryImage: {
    width: 80,
    height: 80,
    marginRight: 16,
    borderRadius: 5,
  },
  repositoryInfo: {
    flex: 1,
  },
  repoInfoContainer:{
    flexDirection: 'row', 
    alignItems: 'center', 
    marginRight: 10,
  }  ,  
  repositoryTitle: {
    fontSize: 18,
    fontWeight: '700',
  },
  repositoryDescription: {
    fontSize: 14,
    color: theme.colors.gray
  },
  repositoryLanguage: {
    fontSize: 14,
    color: theme.colors.gray,
  },
  repositoryStats: {
    fontSize: 14,
    color: theme.colors.gray,
  },
  dropdownButton: {
    width: 100,
    alignSelf: 'flex-end',
    right: 20,
    backgroundColor: 'white'
  },
  dropdownButtonText: {
    fontSize: 11,
    fontWeight: 700,
    color: theme.colors.lightBlue,
  },
  dropdownIcon: {
    width: 80,
    height: 80,
    backgroundColor: 'red'
  },
  dropdownTextStyle: {
    fontSize: 11,
    color: theme.colors.lightBlue,
  },
  optionSelector: {
    alignItems: 'center',
    height: 20
  },
  bottomSheetContainer: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 16,
    
  },
  bottomSheetTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  bottomSheetText: {
    fontSize: 14,
    marginBottom: 8,
  },
  iconRepo: {
    color: theme.colors.gray,
    marginRight: 5,
  },
  openGithubButton: {
    fontSize: 11,
    color: theme.colors.lightBlue,
    marginBottom: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }

});

export { styles }
