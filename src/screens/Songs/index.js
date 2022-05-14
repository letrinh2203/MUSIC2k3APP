import React, { useState } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAssets } from 'expo-asset'
import { connect } from 'react-redux'

import { Header, Section, Drawer, Footer } from '../../widgets'
import { Icon } from '../../components'

const Index = ({ songs }) => {
  const [assets] = useAssets([
    require('../../assets/icons/hamburger.png'),
    require('../../assets/icons/search.png'),
  ])
  const [drawer, setDrawer] = useState(false)

  return (
    <Drawer
      active={drawer}
      current="songs"
      onItemPressed={() => setDrawer(false)}
    >
      <SafeAreaView style={styles.container}>
        <Header
          options={{
            left: {
              children: drawer ? (
                <Icon name="x" color="#C4C4C4" />
              ) : (
                <Image
                  source={require('../../assets/icons/hamburger.png')}
                  resizeMode="contain"
                />
              ),
              onPress: () => setDrawer(!drawer),
            },
            middle: {
              show: true,
              text: 'All SONGS',
            },
            right: {
              show: true,
            },
          }}
        />
        <View style={styles.sections}>
          <Section.MusicList audios={songs} indicator={false} />
        </View>
        <Footer />
      </SafeAreaView>
    </Drawer>
  )
}

const mapStateToProps = (state) => ({ songs: state?.player?.songs })
export default connect(mapStateToProps, null)(Index)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAF1DF',
  },
  sections: {
    flex: 1,
    marginTop: Dimensions.get('screen').height * 0.025,
  },
})
