import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'


const NFTDetails = (props) => {
    const { img, title, price, sellerFeeBasisPoints, mintAddress, content } = props.route.params;
    console.log(img, title, price, sellerFeeBasisPoints, mintAddress, content)

    return (
        <View style={{ flex: 1, backgroundColor: "#ffffff", }}>
            <View style={styles.nftTitleContainer}>
                <Text
                    style={styles.nftTitle}
                >
                    {title}
                </Text>
            </View>
            <View style={{ flex: 1, paddingHorizontal: 30 }}>
                <Image
                    source={{ uri: img }}
                    style={styles.nftImage}
                />
                <View style={{ justifyContent: 'space-between', flexDirection: "row", marginTop: 15, marginBottom: 8 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }} >
                        <Text
                            style={[styles.labelText, { marginRight: 20 }]}
                        >
                            Price
                        </Text>
                        <Text
                            style={styles.ansText}
                        >
                            {price}
                        </Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", }} >
                        <Text
                            style={styles.labelText}
                        >
                            Seller Fee
                        </Text>
                        <Text
                            style={[styles.ansText, { marginLeft: 20 }]}
                        >
                            {sellerFeeBasisPoints}
                        </Text>
                    </View>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                    <Text
                        style={styles.labelText}
                    >
                        Mint Addr
                    </Text>

                    <Text
                        style={[styles.ansText, { flex: 1, marginLeft: 15 }]}
                    >
                        {mintAddress}
                    </Text>
                </View>

                <View style={{ flex: 1, justifyContent: "center" }}>
                    <Text
                        style={[styles.labelText, { textAlign: "center" }]}
                    >
                        Content
                    </Text>
                    <Text
                        style={styles.ansText}
                    >
                        {content}
                    </Text>
                </View>
            </View>
            <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={styles.backButton}>
                <Text
                    style={styles.backButtonText}
                >
                    Back
                </Text>
            </TouchableOpacity>
        </View >
    );
};

export default NFTDetails;

const styles = StyleSheet.create({
    nftTitleContainer: {
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
        shadowColor: '#3176a6',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10,
        backgroundColor: "white",
    },
    nftTitle: {
        fontSize: 18,
        color: "#3176a6",
        fontWeight: "700",
    },
    nftImage: {
        height: 330,
        width: "auto",
        resizeMode: "contain",
        borderRadius: 10
    },
    labelText: {
        fontSize: 15,
        color: "black",
        fontWeight: "700",
    },
    ansText: {
        fontSize: 15,
        color: "#999999",
        fontWeight: "400"
    },
    backButton: {
        backgroundColor: "#3176a6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        height: 50,
        marginBottom: 40,
        marginTop: 10,
        marginHorizontal: 30,
    },
    backButtonText: {
        fontSize: 15,
        color: "white",
        fontWeight: "500"
    }
})