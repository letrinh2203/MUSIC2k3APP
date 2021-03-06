import React, { useState } from 'react'
import { Dimensions, Image, StyleSheet, View, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useAssets } from 'expo-asset'

import { Footer, Header, Section, Drawer } from '../../widgets'
import { Icon } from '../../components'

const Index = () => {
  const [assets] = useAssets([
    require('../../assets/icons/hamburger.png'),
    require('../../assets/icons/search.png'),
  ])
  const [drawer, setDrawer] = useState(false)

  return (
    <Drawer
      active={drawer}
      current="home"
      onItemPressed={() => setDrawer(false)}
    >
      <SafeAreaView style={styles.container}>
        <Header
          options={{
            left: {
              children: drawer ? (
                <Icon name="x" color="#413923" />
              ) : (
                <Image
                  source={require('../../assets/icons/hamburger.png')}
                  resizeMode="contain"
                />
              ),
              onPress: () => setDrawer(!drawer),
            },
		
          }}
        />
		<ScrollView>
        <View style={styles.sections}>
		<Section.Explore />
		<Section.Recent style={{ marginTop: 50 }} />
		<Section.Playlist style={{ marginTop: 50 }} />
		</View>
		</ScrollView>
        <Footer />
      </SafeAreaView>
    </Drawer>
  )
}

export default Index

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: '#FAF1DF'
  },
  sections: {
    flex: 1,
    marginTop: Dimensions.get('screen').height * 0.025,
  },
})
