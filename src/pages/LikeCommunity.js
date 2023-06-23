import React, { useState } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native';
import CommunityCard from '../components/school/communityCard';

const LikeCommunity = () => {
  const [selected, setSelected] = useState('myPosts');

  const myPostsData = [];
  const likedPostsData = [];

  const handleTabChange = (tab) => {
    setSelected(tab);
  };

  const renderTabButton = (tab, label) => (
    <TouchableOpacity
      style={styles.tab}
      onPress={() => handleTabChange(tab)}
    >
      <Text style={[styles.text, selected === tab && styles.selected_text]}>{label}</Text>
    </TouchableOpacity>
  );

  const renderContent = () => {
    if (selected === 'myPosts') {
      return (
        <FlatList
          data={myPostsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CommunityCard data={item} />
          )}
        />
      );
    } else if (selected === 'likedPosts') {
      return (
        <FlatList
          data={likedPostsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <CommunityCard data={item} />
          )}
        />
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.tab_container}>
        {renderTabButton('myPosts', '작성한 글')}
        <Text style={styles.line}>|</Text>
        {renderTabButton('likedPosts', '좋아요한 글')}
      </View>
      <View style={styles.content_container}>{renderContent()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  tab_container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 10
  },
  line: {
    color: 'rgba(205, 205, 205, 1)'
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20
  },
  selected_text: {
    color: 'black',
    fontWeight: 500,
    paddingBottom: 8,
    borderBottomWidth: 1
  },
  text: {
    color: 'rgba(167, 167, 167, 1)',
    fontWeight: 500
  },
  content_container: {
    flex: 1,
    paddingHorizontal: 10
  },
});

export default LikeCommunity;