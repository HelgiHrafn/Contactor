import React, { useState } from 'react'
import styles from './styles'
import { SearchBar } from 'react-native-elements'

const Searchbar = ({ filter }) => {
    const [input, setInput] = useState({
        query: ''
    })

    const inputHandler = (name, value) => {
        setInput({
            ...input,
            [name]: value
        })
    }

    return (
        <SearchBar
            style={styles.searchBar}
            platform={'ios'}
            placeholder="Search..."
            value={input}
            onChangeText={text => { inputHandler('query', text); filter(text) }}
        />
    )
}

export default Searchbar
