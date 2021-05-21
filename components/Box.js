import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { useSelector,useDispatch } from 'react-redux';

export default function Box({ no }) {
    const {boxes, history, isXChance, winner} =  useSelector(state => state.game)
    // const isXChance  = chance;
    // const boxes  = boxInfo;
    const player = isXChance ? 'X' : 'O';
    const index = history.findIndex(rank => rank == no)
 
    const dispatch = useDispatch();
    const onPress = () => {
        if( boxes[no] === null && winner === null) 
            dispatch({type:'TURN',no: no, player: player})    
    }

    return (
        <TouchableWithoutFeedback onPress={onPress}>
            { index !== -1 ? 
                <View style={styles.boxView}>
                    {index%2 == 0 ? <Text>X</Text> :<Text>O</Text>} 
                </View>
            :   <View style={styles.boxView}/> 
            }
        </TouchableWithoutFeedback>
    )
}


const styles = StyleSheet.create({
    boxView: {
        minWidth: 110,
        minHeight: 110,
        borderWidth: 2,
        borderColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    }
})