import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { colors } from '../../themes/colors'
import ArrowDown from '../../assets/svgs/arrow_down.svg'

interface Props {
    title?: string,
    text: string,
    showTitle?: boolean,
    showArrowDown?: boolean,
    onClick: () => void,
    style?: object,
    notClickable?: boolean,
    textStyle?: {},
    bodyRapperStyle?: {},
    DropdownIcon?: any
}
const CustomDropdown: FC<Props> = ({
    title,
    showTitle = true,
    showArrowDown = true,
    text,
    onClick = () => { },
    style,
    notClickable = false,
    textStyle,
    bodyRapperStyle,
    DropdownIcon
}) => {
    return (
        <View style={[styles.amountView, style]}>
            {showTitle &&
                <Text style={styles.amount}>
                    {title}
                </Text>
            }
            <TouchableOpacity style={[styles.bodyRapper, bodyRapperStyle]}
                onPress={onClick}
                disabled={notClickable}
            >
                <View style={{
                    width: '95%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                }}>
                    <Text style={[{ width: '95%', color: colors.veryDarkDesaturatedBlue, fontFamily: "Jeko Regular" }, textStyle]} numberOfLines={1}>
                        {text}
                    </Text>
                    {showArrowDown &&
                        <>
                            {DropdownIcon ?
                                <DropdownIcon />
                                :
                                <ArrowDown />
                            }
                        </>
                    }
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CustomDropdown

const styles = StyleSheet.create({
    amount: {
        alignSelf: 'flex-start',
        marginBottom: 10,
        fontSize: 17,
        fontWeight: '400',
        color: colors.veryDarkDesaturatedBlue,
        fontFamily: "Jeko Bold"
    },
    amountView: {
        width: '100%',
        marginTop: 10,
        paddingHorizontal: 15,
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    bodyRapper: {
        width: '97%',
        borderRadius: 8,
        backgroundColor: colors.veryLightGray2,
        flexDirection: 'row',
        paddingVertical: 16,
        height: 50,
        marginRight: 'auto',
        marginLeft: 'auto',
    }
})