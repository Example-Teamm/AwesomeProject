import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    header: {
        backgroundColor: 'pink',
        alignItems: 'flex-start',
        padding: 10,
    },
    boldText:{
        fontSize: 25,
        fontWeight:'bold', 
    },
    input:{
        borderWidth: 1,
        borderRadius:30,
        borderColor:'pink',
        backgroundColor:'#FFC0CB',
        paddingStart:40,
        margin:20,
        height:45,
        width:"80%",
        alignItems: "center"
    }
});