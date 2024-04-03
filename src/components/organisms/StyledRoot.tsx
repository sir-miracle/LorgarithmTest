import React, { FC } from 'react'
import { View, RefreshControl, Pressable, StyleSheet } from 'react-native'
import { colors } from '../../themes/colors'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { width } from '../../utils/utility_functions/UtilityFunctions';


interface Props {
  style?: object,
  safeAreaStyle?: object,
  children: any,
  usePressable?: boolean,
  onPress?: () => void,
  offset?: number,
  Header?: () => React.ReactNode,
  enableScroll?: boolean,
  useSecondaryColor?: boolean,
  useScrollFlex?: boolean,
  headerRapperStyle?: object,
  contentContainerStyle?: object,
  refreshing?: boolean,
  onRefresh?: () => void,
  canRefresh?: boolean
}
const StyledRoot: FC<Props> = ({
  children,
  style,
  safeAreaStyle,
  usePressable = false,
  onPress = () => { },
  offset = 6,
  Header,
  enableScroll = true,
  useSecondaryColor = false,
  useScrollFlex = false,
  headerRapperStyle,
  contentContainerStyle,
  refreshing = false,
  onRefresh = () => { },
  canRefresh = false
}) => {


  const insets = useSafeAreaInsets();

  return usePressable ? (
    <View style={[styledRootStyles.container,
    {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }, safeAreaStyle]}>
      <View style={[styledRootStyles.header, headerRapperStyle]}>
        {Header && <Header />}
      </View>
      <Pressable
        style={[styledRootStyles.root, style]}
        onPress={onPress}
      >
        <KeyboardAwareScrollView
          onMoveShouldSetResponderCapture={() => true}
          extraScrollHeight={5}
          extraHeight={5}
          style={{ width: '100%' }}
          contentContainerStyle={useScrollFlex ? { ...styledRootStyles.scrollContent, ...{ flex: 1 }, ...contentContainerStyle } : { ...styledRootStyles.scrollContent, ...contentContainerStyle }}
          showsVerticalScrollIndicator={false}
          scrollEnabled={enableScroll}
          refreshControl={canRefresh ?
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            :
            undefined
          }
        >
          {children}
        </KeyboardAwareScrollView>
      </Pressable>
    </View>
  )
    :
    <View style={[styledRootStyles.container,
    {
      paddingTop: insets.top,
      paddingLeft: insets.left,
      paddingRight: insets.right,
    }, safeAreaStyle]}>
      <View style={[styledRootStyles.header, headerRapperStyle]}>
        {Header && <Header />}
      </View>
      <View style={[styledRootStyles.root, style]}>
        <KeyboardAwareScrollView
          extraScrollHeight={5}
          extraHeight={5}
          enableOnAndroid
          style={{ width: '100%' }}
          contentContainerStyle={useScrollFlex ? { ...styledRootStyles.scrollContent, ...{ flex: 1 }, ...contentContainerStyle } : { ...styledRootStyles.scrollContent, ...contentContainerStyle }}
          showsVerticalScrollIndicator={false}
          scrollEnabled={enableScroll}
          refreshControl={canRefresh ?
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            :
            undefined
          }
        >
          {children}
        </KeyboardAwareScrollView>
      </View>
    </View>
}

export default StyledRoot

const styledRootStyles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: colors.white,
    width: '100%',
    paddingHorizontal: 10,
    marginRight: 'auto',
    marginLeft: 'auto',
    flex: 1
  },
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    width: width,
    marginRight: 'auto',
    marginLeft: 'auto',
    flex: 1,
  },
  header: {
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 5,
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingVertical: 10,
    justifyContent: 'center',
  },
  scrollContent: {
    paddingBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
  }
})
