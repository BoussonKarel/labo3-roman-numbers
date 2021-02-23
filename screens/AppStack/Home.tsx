import React from 'react';

import { Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

import { containers, headers } from '../../styles/generic';

const Home = () => {
    return (
        <SafeAreaView style={containers.full}>
            <Text style={ headers.title }>Roman number converter</Text>
            <TextInput style={ headers.input } placeholder='eg. 728' />
            <Text>XIII</Text>
            <Text>In detail</Text>
            <Text>2 x 1 = II</Text>
        </SafeAreaView>
    )
}

export default Home;