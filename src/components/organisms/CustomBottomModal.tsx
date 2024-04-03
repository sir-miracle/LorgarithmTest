import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import React, { FC, useContext } from 'react';
import Modal from 'react-native-modal';
import { height, width, } from '../../utils/utility_functions/UtilityFunctions';
import { colors } from '../../themes/colors';
import Cancel from '../../assets/svgs/cancel.svg'
import  CustomText  from '../../components/atoms/CustomText';

interface Props {
    modalVisible: boolean,
    closeModal: () => void,
    children: any,
    headerText: string,
    scrollOffset?: number,
    style?: object,
    isDragToClose?: boolean,
    headerStyle?: object,
    headerTextStyle?: object,
    showClose?: boolean,
    useConstantHeight?: boolean,
    constantHeight?: number,
    centerHeader?: boolean,
    useTop?: boolean
}
const CustomBottomModal: FC<Props> = ({
    modalVisible,
    closeModal = () => { },
    headerText,
    scrollOffset = 6,
    children,
    style,
    isDragToClose = true,
    headerStyle,
    headerTextStyle,
    showClose = true,
    useConstantHeight = false,
    constantHeight = height * 0.85,
    centerHeader = false,
    useTop = true
}) => {

    return (
        <View>
            <Modal
                animationOut={'zoomOutUp'}
                isVisible={modalVisible}
                coverScreen={true}
                backdropOpacity={0.3}
                onSwipeComplete={closeModal}
                swipeDirection={isDragToClose ? ['down'] : []}
                onBackButtonPress={closeModal}
                onBackdropPress={closeModal}
                scrollOffset={scrollOffset}
                propagateSwipe={true}
                style={[styles.modalRoot, style]}>
                <View style={[styles.root, useConstantHeight && { height: constantHeight }]}>
                    {useTop &&
                        <View style={[styles.top, headerStyle]}>
                            {centerHeader && <View />}
                            <CustomText style={[styles.header, headerTextStyle]}>
                                {headerText}
                            </CustomText>
                            {showClose &&
                                <TouchableOpacity
                                    style={styles.btnView}
                                    onPress={closeModal}
                                >
                                    <Cancel />
                                </TouchableOpacity>
                            }
                        </View>
                    }
                    <ScrollView>
                        {children}
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
};

export default CustomBottomModal;

const styles = StyleSheet.create({
    top: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        paddingVertical: 8
    },
    root: {
        width: width,
        minHeight: height * 0.3,
        backgroundColor: colors.white,
        marginHorizontal: 50,
        borderRadius: 20,
        paddingBottom: 20,
    },
    modalRoot: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        margin: 0,
        borderRadius: 20,
    },
    btnView: {
        width: 25,
        height: 25,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.veryLightGray2
    },
    header: {
        color: colors.veryDarkDesaturatedBlue,
        fontSize: 13,
        fontWeight: '500',
        lineHeight: 15,
    }
});
