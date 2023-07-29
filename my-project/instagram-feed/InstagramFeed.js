import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import data from './data.js';

export default function Instagram() {
  return (
    <View>
      <View style={styles.container}>
        <Text>{'\n'}</Text>
        <Text>Instagram Feed {'\n'}</Text>
        <statusbar style="auto" />
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
});