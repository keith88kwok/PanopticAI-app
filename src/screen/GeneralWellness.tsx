import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Text, Touchable, View } from "react-native";
import exampleChart from '../assets/bar-chart-example.png';
import { StackNavigation } from "../../App";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

function GeneralWellnessScreen() {
    const navigation = useNavigation<StackNavigation>();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={() => Alert.alert('information', 'addition information')}>
                <MaterialCommunityIcons name="information-outline" size={30} color="#000" style={{marginRight: 10}} />
                </Pressable>
            )
        })
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cardContainer}>
                <Text style={styles.dataText}>
                    98
                </Text>
                <Text style={styles.bodyText}>
                    A good example of a paragraph contains a topic sentence, details and a conclusion.
                    'There are many different kinds of animals that live in China.
                    Tigers and leopards are animals that live in China's forests in the north.
                    In the jungles, monkeys swing in the trees and elephants walk through the brush.
                </Text>
                <Image source={exampleChart} style={styles.chart} />
            </View>
            <View style={styles.cardContainer}>
                <Text style={styles.title}>
                    What does it mean?
                </Text>
                <Text style={styles.bodyText}>
                    A good example of a paragraph contains a topic sentence, details and a conclusion.
                    'There are many different kinds of animals that live in China.
                    Tigers and leopards are animals that live in China's forests in the north.
                    In the jungles, monkeys swing in the trees and elephants walk through the brush.
                </Text>
            </View>
        </SafeAreaView>
    )
}

export default GeneralWellnessScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardContainer: {
        backgroundColor: '#FFF',
        justifyContent: 'space-evenly',
        alignItems: 'flex-start',
        margin: 10,
        padding: 10,
        borderRadius: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        paddingBottom: 10,
    },
    dataText: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000',
        paddingBottom: 10,
    },
    bodyText: {
        fontSize: 12,
        color: '#0f0f0f',
    },
    chart: {
        marginVertical: 10,
        width: '100%',
        height: 200,
        resizeMode: 'contain'
    }
})