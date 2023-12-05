import { SafeAreaView, Text } from "react-native";

const DummyScreen = (screenName: string) => {
    return function(){
        return (
            <SafeAreaView>
                <Text>{screenName}</Text>
            </SafeAreaView>
        )
    }
}

export default DummyScreen;