import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';

interface AppButtonProps extends PressableProps {
    title?: string;
}

function AppButton(props: AppButtonProps) {
    return (
        <Pressable style={styles.button} onPress={props.onPress}>
            {props.title ?
                <Text style={styles.text}>{props.title}</Text>
                :
                props.children}
        </Pressable>
    )
}

export default AppButton;

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 15,
        elevation: 3,
        backgroundColor: 'black',
        width: '100%',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});