import React, {Component} from 'react'
import { NativeModules, Text } from 'react-native';
const { AutofillInput } = NativeModules;

class Input extends Component{
    render() {
        return(
            <Text>
                Hi every one
            </Text>
        )
    }
}

export default Input;
