import React from 'react'
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import GestureRecognizer from 'react-native-swipe-gestures';


function NoTaskPage() {
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    const onSwipeLeft = (state:any) => {
        console.log("swipe lefttt",state)
    }
    const onSwipeRight = (state:any) => {
        console.log("swipe righttttt",state)
    }

    return (
        <GestureRecognizer
            onSwipeLeft={(state) => onSwipeLeft(state)}
            onSwipeRight={(state) => onSwipeRight(state)}
            config={config}
            style={{
                flex: 1,
            }}
        >
            <View>
                <View style={{ alignItems: "center", justifyContent: "center", alignSelf: "center", marginTop: "40%" }}>
                    <Icon name="notes" size={50} />
                    <Text style={{ textAlignVertical: "center", fontSize: 15, fontFamily: "Nunito-Regular", color: "black" }}>You don't have any task</Text>
                </View>
            </View>
        </GestureRecognizer>
    )
}

export default NoTaskPage;