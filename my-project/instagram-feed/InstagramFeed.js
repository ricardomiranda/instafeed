import { StatusBar } from 'react-native';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import data from './data.js';

export default function Instagram() {
  return (
    <View>
      <View style={styles.container}>
        <Text>{'\n'}</Text>
        <Text>Instagram Feed {'\n'}</Text>
        <StatusBar style="auto" />
      </View>
      <FlatList
        data={data.articles}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={item.image}
              style={styles.itemImage}
            />
            <Text>Name: {item.name}</Text>
            <Text>Likes: {item.likes}</Text>
            <Text>Comments: {item.comments}</Text>
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'azure',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  itemImage: {
    width: '100%',
    height: 200,
  },
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