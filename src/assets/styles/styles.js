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
        borderRadius: 20, // Para criar uma imagem de perfil circular
    },
    pageContainer: {
        flex: 1,
        paddingHorizontal: 24,
        elevation: 0,
        shadowOpacity:0,
        marginTop:0,
        paddingTop:30,
        backgroundColor: '#fff'
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
        backgroundColor: theme.colors.gray,
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
      avatarInfo: { width: '100%', height: 300, marginTop:0 },
      nameInfo: { fontSize: 24, fontWeight: 'bold', marginTop: 16},
      emailInfo: { fontSize: 14,  fontWeight: 'normal', marginVertical: 10, color: theme.colors.lightGray },
      bioInfo: { flex:1, textAlign: 'left', fontSize: 16, color: theme.colors.lightGray },
      containerFollowInfo: {  flexDirection: 'row',
      justifyContent: 'space-around',
      marginVertical: 20},
      coloredNumber: {fontSize: 18, fontWeight: 'bold', color: theme.lightBlue}



    
    
    
});

export { styles }
