import { View, Image, Text, StyleSheet } from "react-native";

export default function MemeItem({ meme }) {

    return (
        <View>
            <Image style={styles.image} src={meme.url}></Image>
            <Text>{meme.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        height: 200,
        resizeMode: "contain"
    }
})