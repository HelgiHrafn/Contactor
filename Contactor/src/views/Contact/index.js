import React from 'react'
import { View, Text, Image } from 'react-native'

const Contact = () => {
    return (
    <View>
        <Text>Name</Text>
        <Text>Phone Number</Text>
        <Image resizeMode={'cover'} source={{ uri: 'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec' }} />
    </View>
    )
}

export default Contact