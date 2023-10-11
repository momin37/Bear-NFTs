import React from 'react';
import { Image, StyleSheet, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function NFTList({ nfts, handleScroll }) {

  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("NFTDetails", item);
      }}
      style={styles.nftContainer}>
      <Image source={{ uri: item.img }} style={styles.nftImage} />
    </TouchableOpacity>
  )

  return (
    <FlatList
      style={{ marginHorizontal: 10 }}
      showsVerticalScrollIndicator={false}
      data={nfts}
      renderItem={renderItem}
      numColumns={2}
      onEndReached={handleScroll}
      onEndReachedThreshold={0.5}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const itemWidth = (Dimensions.get('window').width - 60) / 2;
const styles = StyleSheet.create({
  nftContainer: {
    width: itemWidth,
    alignItems: 'center',
    margin: 10,
  },
  nftImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 10,

  },
});
