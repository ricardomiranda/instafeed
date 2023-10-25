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
import Constants from 'expo-constants';
import Article from './Article';

const INSTAGRAM_LOGO =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png';

export default function Instagram() {
  function renderItem({ item, index }) {
    if (index === 0) {
      return (
        <>
          <View style={styles.Stories}>
            <Stories stories={data.stories} profile={data.profile} />
          </View>

          <Article item={item} />
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
          <Feather name="camera" size={24} />
        </TouchableOpacity>

        <Image source={{ uri: INSTAGRAM_LOGO }} style={styles.logo} />

        <TouchableOpacity>
          <Feather name="send" size={24} />
        </TouchableOpacity>
      </View>

      <FlatList
        data={data.articles}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        showsHorizontalScrollIndicator={false}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTime: Constants.statusBarHeight,
  },
  itemImage: {
    width: '100%',
    height: 200,
  },
  header: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    height: 50,
  },
  logo: {
    flex: 1,
    height: 50,
    resizeMode: 'contain',
  },
  stories: {
    borderBottomWidth: 1,
    borderColor: 'lightgray',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    height: 100,
  },
});