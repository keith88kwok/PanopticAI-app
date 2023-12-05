import { StyleSheet, Text, View } from "react-native"
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

interface ResultCardProps {
    key: string,
    value: any,
    title: string,
}

function ResultCard(props: ResultCardProps) {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <AntDesignIcon name="heart" size={20} color="#000" />
            </View>
            <View style={styles.resultContainer}>
                <Text>{props.title}</Text>
                <Text>{props.value}</Text>
            </View>
            <View style={[styles.iconContainer, {alignItems: 'flex-end'}]}>
                <MaterialIcons name="keyboard-arrow-right" size={20} color="#000" />
            </View>
        </View>
    )
}

export default ResultCard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    iconContainer: {
        flex: 1,
        paddingHorizontal: 10,
    },
    resultContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
})