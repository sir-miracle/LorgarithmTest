import { View, ActivityIndicator } from 'react-native'
import React, { FC } from 'react'
import { colors } from '../../themes/colors'

interface Props {
  color?: string,
  style?: object,
  size?: number | "small" | "large" | undefined
}
const LoadingIndicator: FC<Props> = ({ color = colors.white, style = {}, size = "small" }) => {
  return (
    <View
      style={{ flex: 1, justifyContent: 'center' }}>
      <ActivityIndicator size={size} color={color} animating={true} style={style} />
    </View>
  );
}

export default LoadingIndicator
