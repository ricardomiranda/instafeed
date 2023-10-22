import { StatusBar } from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import Stories from './Stories';
import data from './data';

const INSTAGRAM_LOG =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png';

export default function Instagram() {
  function renderItem({ item, index }) {
    if (index === 0) {
      return (
        <>
          <View style={styles.Stories}>
            <Stories stories={data.stories} profile={data.profile} />
          </View>
        </>
      )
    } else {
      return;
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather name="camera" size={24} color="black" />
        </TouchableOpacity>
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
    </SafeAreaView>
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