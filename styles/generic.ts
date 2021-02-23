import { StyleSheet } from 'react-native';
import colors from './colors';

const styles = StyleSheet.create({});

export const containers = StyleSheet.create({
    full: {
        padding: 16,
        backgroundColor: 'white',
        height: '100%'
    }
})

export const headers = StyleSheet.create({
    title: {
        color: colors.light,
        fontSize: 24,
        fontWeight: 'bold'
    },

    input: {
        fontSize: 48
    }
});