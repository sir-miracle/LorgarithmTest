import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { colors } from '../../themes/colors'
import LoadingIndicator from '../molecules/LoadingIndicator'
import CustomText from './CustomText'

interface Props {
    onPress: () => void,
    label: string | undefined,
    style?: object,
    labelStyle?: object,
    disabled?: boolean,
    loading?: boolean
}

const CustomButton: FC<Props> = ({
    onPress = () => { },
    label,
    style,
    labelStyle,
    disabled = false,
    loading = false
}) => {

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.buttonStyle, disabled && { backgroundColor: colors.indicatorColor }, style]}
            onPress={onPress}
            disabled={disabled || loading}
        >
            {loading ?
                <LoadingIndicator />
                :
                <CustomText style={[styles.labelstyle, labelStyle]}>
                    {label}
                </CustomText>
            }
        </TouchableOpacity>
    )
}

export default CustomButton

const styles = StyleSheet.create({
    buttonStyle: {
        width: '90%',
        height: 48,
        backgroundColor: colors.brightOrange,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 8,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    labelstyle: {
        color: colors.white,
        fontSize: 14,
        fontWeight: '600',
        lineHeight: 17,
        fontFamily: "Jeko Bold"
    }
})