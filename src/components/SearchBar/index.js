import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { SearchBar } from 'react-native-elements'

const Searchbar = () => {
    const [input, setInput] = useState({
        query: ''
    })

    const inputHandler = (name, value) => {
        setInput({
            ...input,
            [name]: value
        })
        
    }
    console.log(input.query)
    return (
        <SearchBar
        style={styles.searchBar}
        platform={'ios'}
        placeholder="Search..."
        value={input}
        onChangeText={text => inputHandler('query', text)}
        />
    );
}

export default Searchbar