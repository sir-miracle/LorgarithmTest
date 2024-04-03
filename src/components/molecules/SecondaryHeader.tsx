import { StyleSheet, View, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React, { FC, } from 'react'
import BackArrow from '../../assets/svgs/arrow_back.svg'
import BackArrowWhite from '../../assets/svgs/arrow_back_white.svg'
import Cancel from '../../assets/svgs/cancel.svg'
import CustomText from '../../components/atoms/CustomText'
import { colors } from '../../themes/colors'


interface Props {
    centerTitle: string,
    onBackPress?: () => void,
    style?: object,
    showBackArrow?: boolean,
    centerTitlestyle?: object,
    showRightCancel?: boolean,
    onRightCancel?: () => void,
    LeftComponent?: () => React.ReactNode,
    RightComponent?: () => React.ReactNode,
    backVewStyle?: StyleProp<ViewStyle>,
    useWhiteBackArrow?: boolean
}
const SecondaryHeader: FC<Props> = ({ centerTitle, onBackPress = () => { }, onRightCancel = () => { }, style, centerTitlestyle, showBackArrow = true, showRightCancel = false, LeftComponent, RightComponent, backVewStyle, useWhiteBackArrow = false }) => {
    return (
        <View style={[styles.root, style]}>

            {showBackArrow ?
                <>
                    {LeftComponent ? <LeftComponent /> :
                        <TouchableOpacity style={[styles.backVew, backVewStyle]} onPress={onBackPress} activeOpacity={0.7}>
                            {useWhiteBackArrow ? <BackArrowWhite /> : <BackArrow />}
                        </TouchableOpacity>
                    }
                </>
                :
                <View />
            }

            <CustomText style={[styles.title, centerTitlestyle]}>{centerTitle}</CustomText>
            {showRightCancel ?
                <>
                    {RightComponent ? <RightComponent /> :
                        <TouchableOpacity style={[styles.backVew, { marginRight: 5 }]} onPress={onRightCancel} activeOpacity={0.7}>
                            <Cancel />
                        </TouchableOpacity>
                    }
                </>
                :
                <View />
            }
        </View>
    )
}

export default SecondaryHeader

const styles = StyleSheet.create({
    root: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15
    },
    title: {
        color: colors.veryDarkDesaturatedBlue,
        fontSize: 16,
        fontWeight: '500',
        lineHeight: 20,
        fontFamily: 'Jeko Bold'
    },
    backVew: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: colors.darkGrayishBlue
    }
})