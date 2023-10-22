import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Story({ avatar, name, isCreateStory = false, isSeen }) {
    return (
        <TouchableOpacity style={styles.user}>
            <View >
                <View style={[styles.avatarBorder, {
                    borderColor: isCreateStory
                        ? "transparent" :
                        isSeen ? "rgba(0, 0, 0, 0.0975" : "#c73191",
                },]}>

                    <Image source={avatar} style={styles.avatar} />
                    {isCreateStory && (
                        <View style={styles.plusIcon}>
                            <Feather name="plus" size={16} color="white" />
                        </View>
                    )}
                </View>
                <Text numberOfLines={1} style={styles.names}>
                    {name}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    user: {
        width: '100%', // occupy full width of the parent component
        paddingHorizontal: 10, // 10 pixels padding on left and right
    },
    avatarBorder: {
        width: 70, // 70 pixels width
        height: 70, // 70 pixels height
        borderRadius: 35, // half of width and height to make it a circle
        borderWidth: 3, // 3 pixels width of the border
        borderColor: 'grey', // border color
        margin: 5, // 5 pixels margin on all sides
        alignItems: 'center', // center child elements horizontally
        justifyContent: 'center', // center child elements vertically
    },
    avatar: {
        width: 60, // 60 pixels width
        height: 60, // 60 pixels height
        borderRadius: 30, // half of width and height to make it a circle
    },
    plusIcon: {
        position: 'absolute', // position it absolutely
        alignSelf: 'center',
        bottom: 0, // position it at the bottom of its parent component
        right: 0, // position it at the right of its parent component
        width: 20, // 20 pixels width
        height: 20, // 20 pixels height
        borderRadius: 10, // half of width and height to make it a circle
        overflow: 'hidden', // hide child elements that exceed its dimensions
        alignItems: 'center', // center child elements horizontally
        justifyContent: 'center', // center child elements vertically
    },
    names: {
        textAlign: 'center', // center the text
        fontSize: 14, // 14 pixels font size
        lineHeight: 18, // 18 pixels line height
        color: '#333', // text color
        maxWidth: '90%', // maximum width is 90% of the parent component's width
    },
});
