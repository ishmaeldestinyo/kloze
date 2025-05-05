import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TweetIconCard from './TweetIconCard';
import TweetImage from '@/constants/ImageUtils';

function TweetCard({title}: any) {
  return (
    <View style={styles.container}>
        <View style={styles.pinnedTextContainer}>
            <Ionicons name='pin' size={10} color={'#888'}/>
            <Text style={styles.pinnedText}>Pinned {title}</Text>
        </View>

        <View style={styles.tweetDetailWrapper}>
            <Image  source={{
                uri: "https://img.freepik.com/free-vector/young-boy-avatar-illustration_1308-175646.jpg?t=st=1746195412~exp=1746199012~hmac=d0bfc9e53cd37514e7c51e8718478540d50455a79b49da7f12b550abafae2013&w=740",
              }} style={styles.profilePic}/>
              <View>
                <View style={
                    styles.offsetMenu
                }>
                    <Text style={{
                        fontSize: 17,
                        fontWeight: 'bold',
                        marginLeft: 2,
                    }}>Pixsellz</Text>
                    <Text style={{
                        fontSize: 14,
                        color: '#888',
                        fontWeight: 'condensedBold'
                    }}>@pixsellz</Text>
                    <Text
                    style={{
                        color: '#888',
                    }}>7/13/19</Text>
                </View>
                <Text style={styles.tweetText}>Scheme constructor - your ultimate prototyping kit for all UI web and mobileapp designs</Text>
                <Text style={styles.withLinks}>constructor.pixsellz.io</Text>
                <Text style={{
                    color: '#87ceeb',
                    marginVertical: 4,
                }}>#prototyping #wireframe #uiux #ux</Text>
                <Image
                source={{
                uri: TweetImage,
                }}
                style={{
                    width: '49%',
                    height: 180,
                    borderRadius: 10,
                    marginTop: 6,
                }}/>
                <Ionicons name='play' color={'white'} size={20} style={{
                    position: 'absolute',
                    backgroundColor: '#87ceeb',
                    borderColor: 'whitesmoke',
                    padding: 10,
                    borderRadius: 100,
                    borderWidth: 3,
                    bottom: 110,
                    marginLeft: 104,
                }}/>
                <Text style={{
                    backgroundColor: '#131313',
                    color: 'white',
                    width: 30,
                    borderRadius: 4,
                    position: 'absolute',
                    marginLeft: 5,
                    paddingHorizontal: 2,
                    textAlign: 'center',
                    bottom: 50,
                }}>0:11</Text>
                <Text style={{
                    fontSize: 13,
                    marginTop: 4,
                    fontWeight: 500,
                    color: '#888'
                }}>109 views</Text>
                <TweetIconCard/>
              </View>
        </View>

        <Ionicons name='add' size={24} style={{
            elevation: 10,
            zIndex: 3,
            backgroundColor: '#87ceeb',
            width: 55,
            textAlign: 'center',
            height: 55,
            borderRadius: 100,
            position: 'absolute',
            bottom: 4,
            paddingTop: 16,
            right: 3,
            color: '#fff'
        }}/>
    </View>
  )
}

export default TweetCard


const styles = StyleSheet.create({
    container: {
        marginTop: 3,
    },
    offsetMenu: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        gap: 3,
    },
    withLinks: {
        color: '#87ceeb',
        marginVertical: 3,
    },
    tweetText: {
        color: '#888',
        fontSize: 15,
        paddingHorizontal: 2,
        paddingVertical: 1.5,
        width: '47%'
    },
    tweetDetailWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        paddingTop: 5,
        gap: 5,
    },
    profilePic: {
        width: 55,
        height: 55,
        borderRadius: 100,
        marginRight: 8,
      },
    pinnedTextContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 2,
        marginLeft: 50,
        alignItems: "center",
        alignContent: 'center',
    },
    pinnedText: {
        fontSize: 12,      
        fontWeight: 'bold',
        color: '#888'
    }
});