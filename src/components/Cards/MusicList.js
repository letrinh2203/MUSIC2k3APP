import React, { useState } from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Entypo } from '@expo/vector-icons'
import Icon from '../Icon'
import * as Modal from '../../widgets/Modals'
import { millisToMin } from '../../helpers'

const MusicList = ({
  style = {},
  imageURL,
  title = 'Song Title',
  author = `Author Name`,
  duration = '03:22',
  onPlayPress = () => {},
  moreOptions = [],
}) => {
  const [moreOptionsModal, setMoreOptionsModal] = useState(false)

  return (
    <>
      <TouchableOpacity
        style={[styles.container, style]}
        onPress={() => setMoreOptionsModal(true)}
      >
        <View style={styles.left}>
          <Image
            style={{
              width: 70,
              height: 70,
              position: 'absolute',
              bottom: -3,
              opacity: 0.5,
              alignSelf: 'center',
            }}
            source={{ uri: imageURL }}
            resizeMode="cover"
            borderRadius={6}
            blurRadius={100}
          />
          <Image
            style={styles.coverArt}
            source={{ uri: imageURL }}
            resizeMode="cover"
            borderRadius={6}
          />
        </View>
        <View style={styles.middle}>
          <View>
            <Text style={styles.title} numberOfLines={2}>
              {title}
            </Text>
            <Text style={styles.author}>{author}</Text>
          </View>
          <Text style={styles.duration}>{millisToMin(duration)}</Text>
        </View>
        <View style={styles.right}>
          <TouchableOpacity onPress={onPlayPress}>
            <LinearGradient style={styles.playBtn} colors={['#fff', '#fff']}>
              <Icon name="play" color="#413923" />
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View style={styles.right}>

          <Entypo 
		  name='dots-three-vertical' size={20}
          color="#413923"
          style={{ padding: 10 }}
          />
        </View>
      </TouchableOpacity>

      <Modal.MoreOptions
        visible={moreOptionsModal}
        onClose={setMoreOptionsModal}
        title={title}
        moreOptions={moreOptions}
      />
    </>
  )
}

export default MusicList

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#FFCA97',
    paddingBottom: 5,
  },
  left: {},
  middle: {
    flex: 1,
    height: 80,
    marginLeft: 10,
    marginRight: 20,
    justifyContent: 'space-between',
  },
  right: {},
  coverArt: {
    width: 80,
    height: 80,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  author: {
    color: '#888',
    fontSize: 15,
  },
  duration: {
    color: '#A4A4A4',
    fontSize: 15,
  },
  playBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    paddingLeft: 4,
    borderRadius: 100,
    borderWidth: 1.5,
    borderColor: '#413923',
  },
})
