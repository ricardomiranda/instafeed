import data from './data';
import CustomPrompt from './CustomPrompt';
import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import { Feather } from '@expo/vector-icons';

function getInitialState(item) {
    const article = data.articles.find(a => a.id === item.id);
    return {
        commentsCount: article.commentsCount,
        isLiked: false,
        likes: article.likes,
    };
}

export default function Article({ item }) {
    const [promptVisible, setPromptVisible] = useState(false);

    const intialState = getInitialState(item);
    const [comment, setComment] = useState('');
    const [commentsCount, setCommentsCount] = useState(intialState.commentsCount);
    const [isLiked, setIsLiked] = useState(intialState.isLiked);
    const [likes, setLikes] = useState(intialState.likes);

    useEffect(() => {   // Update the document title using the browser API  
        console.log(comment);
    }, [comment]);

    function handleComment(text) {
        setComment(text);
        setCommentsCount(prevCommentsCount => prevCommentsCount + 1);
        setPromptVisible(false); // Hide the prompt
    };

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
                    <TouchableOpacity style={styles.actionButton}
                        onPress={() => {
                            setIsLiked(!isLiked);
                            if (isLiked) {
                                setLikes(prevLikes => prevLikes - 1);
                            } else {
                                setLikes(prevLikes => prevLikes + 1);
                            }
                        }}
                    >
                        <Feather name="heart" size={24} color={isLiked ? "red" : "black"} />
                    </TouchableOpacity>

                    <CustomPrompt
                        visible={promptVisible}
                        onClose={() => setPromptVisible(false)}
                        onSubmit={handleComment}
                    />

                    <TouchableOpacity style={styles.actionButton}
                        onPress={() => setPromptVisible(true)} // Show the prompt when button is pressed
                    >
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
                <Text style={styles.likes}>{likes} likes</Text>
                <Text style={styles.commentsCount}>view all {commentsCount} counts</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    article: {
        marginBottom: 10,
    },
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
        height: 50,
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
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    image: {
        width: '100%',
        height: null,
        aspectRatio: 1,
        resizeMode: 'contain',
        margin: 0,
        padding: 0,
        backgroundColor: 'red',
    },
    action: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
        paddingHorizontal: 8,
    },
    actionLeft: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    info: {
        paddingHorizontal: 15,
    },
    likes: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 5,
        marginBottom: 5,
    },
    commentsCount: {
        fontSize: 10,
        color: '#999',
        marginBottom: 5,
    },
    actionButton: {
        marginRight: 15,
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
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 14,
        color: '#333',
        maxWidth: '90%',
        textAlign: 'center',
        marginLeft: 10,
    },
});
