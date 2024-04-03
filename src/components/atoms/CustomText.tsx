import { StyleProp, StyleSheet, Text, TextProps, TextStyle, } from 'react-native'
import React, { FC } from 'react'


interface Props extends TextProps {
    style?: StyleProp<TextStyle>,
    children?: string | React.ReactNode,
}

const CustomText: FC<Props> = ({ style, children, ...props }) => {
    return (
        <Text {...props} style={[styles.textStyle, style]}>
            {children}
        </Text>
    )
}

export default CustomText

const styles = StyleSheet.create({
    textStyle: {
        color: 'black',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 20,
    }
})