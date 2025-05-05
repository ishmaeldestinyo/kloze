import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

function TweetIconCard() {

    const iconsTweet = [
        {
            icon: <Ionicons name={'chatbubble-outline'} size={16} color={'#888'}/>,
            tweetValue: 2,
        },
        {
            icon: <Ionicons name={'refresh-outline'} size={16} color={'#888'}/>,
            tweetValue: 2,
        },
        {
            icon: <Ionicons name={'heart'} size={16} color={'darkred'}/>,
            tweetValue: 15,
        },
        {
            icon: <Ionicons name={'share'} size={16} color={'#888'}/>,
        }
    ];
  return (
    <View style={styles.container}>
      {iconsTweet && iconsTweet.length > 0 && iconsTweet.map( (tweet, i) => (
        <View key={i} style={{flexDirection: 'row', gap: 2,}}>
            {tweet.icon}
            <Text style={{color: '#888'}}>{tweet.tweetValue}</Text>
        </View>
      ))}
    </View>
  )
}

export default TweetIconCard


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 7,
        gap: 33,
        
    }
})