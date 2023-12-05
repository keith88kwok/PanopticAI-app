import { Image, Pressable, SafeAreaView, ScaledSize, ScrollView, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import AppButton from "../components/Button";
import FaceScan from '../assets/FaceScan.png';
import dummyData from "../dummyData";
import ResultCard from "../components/ResultCard";
import { useNavigation } from "@react-navigation/native";
import { StackNavigation } from "../../App";


function StatisticsScreen() {
    const dimensions = useWindowDimensions();
    const styles = StatisticsStyles(dimensions);
    const data: Record<string, any> = dummyData[0]
    const navigation = useNavigation<StackNavigation>();

    return (
        <SafeAreaView style={[
            styles.container,
            {
                // Try setting `flexDirection` to `"row"`.
                flexDirection: 'column',
            },
        ]}>
            <View style={styles.topBgColorView}>

            </View>
            <View style={styles.resultContainer}>
                <Image source={FaceScan} style={styles.logo} />
                <Text style={styles.text}>Just finished lunch?</Text>
                <Text style={styles.subtitle}>Last Result</Text>
                <Text style={styles.result}>96.7/100</Text>
                <Text style={styles.text}>General Wellness</Text>
                <AppButton title="View Details" onPress={() => navigation.navigate('GeneralWellness')} />
            </View>
            <View style={styles.otherResultContainer}>
                <Text style={[styles.subtitle, { textAlign: 'left' }]}>Other Result</Text>
                <ScrollView>
                    {
                        Object.keys(data).map((key, index) => (
                            <Pressable onPress={() => navigation.navigate('BloodPressure')} key={key}>
                                <ResultCard key={key} value={data[key]} title={key} />
                            </Pressable>
                        ))
                    }
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default StatisticsScreen;

const StatisticsStyles = (dimensions: ScaledSize) => StyleSheet.create({
    container: {
        flex: 1,
    },
    topBgColorView: {
        backgroundColor: '#000',
        width: '100%',
        height: dimensions.height * 0.3,
    },
    resultContainer: {
        backgroundColor: '#FFF',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        margin: 10,
        marginTop: -dimensions.height * 0.15,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    otherResultContainer: {
        backgroundColor: '#FFF',
        justifyContent: 'space-evenly',
        margin: 10,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 15,
        flex: 1
    },
    otherResultList: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        marginTop: -dimensions.height * 0.13,
        width: 120,
        height: 120
    },
    subtitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },
    result: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000',
    },
    text: {
        fontSize: 15,
        fontWeight: 'normal',
        color: '#000'
    },
})