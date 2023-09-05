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
        padding: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20, // Para criar uma imagem de perfil circular
    },
    pageContainer: {
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        elevation: 0,
        shadowOpacity:0,
        marginTop:0,
        paddingTop:20,
    },
    pageTitle:{
        fontSize: 34,
        fontWeight: '400',
        color: theme.colors.stroke,
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
        backgroundColor: theme.colors.blue,
        textTransform: 'capitalise',
        
      }
    
    
});

export { styles }
