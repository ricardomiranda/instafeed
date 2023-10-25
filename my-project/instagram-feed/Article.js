import dara from './data';
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Alert
} from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function Article({ item }) {
    return (
        <View style={StyleSheet.article}>
            <View style={styles.header}>
                <View style={styles.user}>
                    <TouchableOpacity>
                        <Image source={item.avatar} style={styles.avatar} />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Text numberOfLines={1} style={styles.name}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity>
                    <Feather name="more-horizontal" size={24} color="black" />
                </TouchableOpacity>
            </View>

            <Image source={item.image} style={styles.image} />

            <View style={styles.action}>
                <View style={styles.actionLeft}>
                    <TouchableOpacity style={styles.actionButton}>
                        <Feather name="heart" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton}>
                        <Feather name="message-circle" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.actionButton}>
                        <Feather name="send" size={24} color="black" />
                    </TouchableOpacity>

                    <View>
                        <TouchableOpacity style={styles.actionButton}>
                            <Feather name="bookmark" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.info}>
                <Text style={styles.likes}>likes</Text>
                <Text style={styles.commentCount}>view all counts</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: '#d3d3d3',
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 0.5,
        borderColor: '#e9e9e9',
    },
    avatarBorder: {
        width: 44,
        height: 44,
        borderRadius: 22,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    image: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
        marginVertical: 10,
    },
    action: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
    },
    actionLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    actionText: {
        marginLeft: 5,
        fontSize: 16,
        fontWeight: '500',
        color: '#000',
    },
    plusIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#c73191',
        overflow: 'hidden',
    },
    names: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
        maxWidth: '90%',
        textAlign: 'center',
    },
});
