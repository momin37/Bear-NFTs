import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native';
import NFTList from '../components/NFTList';
import axios from "axios"

export default function Home() {
  const [nfts, setNFTs] = useState([]);
  const [originalNFTs, setOriginalNFTs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [offset, setOffset] = useState(0);

  // Fetch data from the api
  const fetchNFTs = async () => {
    try {
      const response = await axios.get(
        `https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=${offset}`
      );
      setOriginalNFTs([...originalNFTs, ...response.data.results]);
      setNFTs([...nfts, ...response.data.results]);
    } catch (error) {
      console.error('Error fetching NFTs:', error);
    }
  };

  // fetchNFTs will again be called with the new offset when list scroll will reach the end
  useEffect(() => {
    fetchNFTs();
  }, [offset]);

  // Handle scroll to load more on pagination
  const handleScroll = () => {
    setOffset(offset + 20);
  };

  // Handle search when search button is clicked
  const handleSearch = () => {
    if (searchTerm) {
      const filteredNFTs = nfts.filter((nft) =>
        nft.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setNFTs(filteredNFTs)
    } else {
      setNFTs(originalNFTs);
    }
  }

  return (
    <View style={{ backgroundColor: "#FFFFFF" }}>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Type here to search..."
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
        />
        <TouchableOpacity
          onPress={handleSearch}
          style={styles.searchButton}>
          <Text style={styles.searchText}>
            Search
          </Text>
        </TouchableOpacity>
      </View>

      <NFTList nfts={nfts} handleScroll={handleScroll} />

    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    height: 80,
    backgroundColor: 'white',
    shadowColor: '#3176a6',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 10,
  },
  searchInput: {
    backgroundColor: "#ebebeb",
    borderRadius: 10,
    flex: 1,
    height: 40,
    paddingLeft: 20
  },
  searchButton: {
    height: 40,
    backgroundColor: "#3176a6",
    justifyContent: "center",
    alignItems: "center",
    width: 70,
    borderRadius: 10,
    marginLeft: 15
  },
  searchText: {
    fontSize: 13,
    color: "white",
    fontWeight: "normal"
  }
})
