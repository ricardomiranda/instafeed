import React from "react";
import { FlatList } from "react-native";
import Story from "./Story";

export default function Stories({ stories, profile }) {
    function renderItem({ item, index }) {
        if (index === 0) {
            return (
                <>
                    <Story
                        name="Cado Ado"
                        avatar={profile.avatar}
                        isCreateStory={true}
                    />
                    <Story
                        avatar={item.avatar}
                        name={item.name}
                        isCreateStory={index === 0}
                        isSeen={item.isSeen}
                    />
                </>
            );
        } else {
            return (
                <Story
                    avatar={item.avatar}
                    name={item.name}
                    isSeen={item.isSeen}
                />
            );
        }
    }

    return (
        <FlatList
            data={stories}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={renderItem}
        />
    );
}