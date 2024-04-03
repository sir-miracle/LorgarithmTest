import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomBottomModal from '../../components/organisms/CustomBottomModal'
import { height } from '../../utils/utility_functions/UtilityFunctions'
import CustomButton from '../../components/atoms/CustomButton'
import CustomText from '../../components/atoms/CustomText'

const AppointmentDetailsModal = ({ data, openModal, setOpenModal, headerText, close, remove }) => {
    return (
        <CustomBottomModal
            modalVisible={openModal}
            closeModal={setOpenModal}
            headerText={headerText}
            useConstantHeight={true}
            constantHeight={height * 0.40}
        >
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <View style={styles.item}>
                    <CustomText>Coach name:</CustomText>
                    <CustomText>{data?.coachName}</CustomText>
                </View>
                <View style={styles.item}>
                    <CustomText>Date:</CustomText>
                    <CustomText>{data?.date}</CustomText>
                </View>
                <View style={styles.item}>
                    <CustomText>Time:</CustomText>
                    <CustomText>{data?.time}</CustomText>
                </View>
                <View style={styles.item}>
                    <CustomText>Location:</CustomText>
                    <CustomText>{data?.location}</CustomText>
                </View>
                <View style={styles.item}>
                    <CustomText>Extra information:</CustomText>
                    <CustomText>{data?.extraInfo}</CustomText>
                </View>
            </View>

            <View style={{ flexDirection: 'row', width: '100%', alignSelf: 'baseline', marginTop: 70 }}>
                <CustomButton
                    style={{ width: '45%' }}
                    label='Close'
                    onPress={() => { close() }}
                />
                <CustomButton
                    style={{ width: '45%' }}
                    label='Cancel Appointment'
                    onPress={() => { remove(data?.id) }}
                />
            </View>
        </CustomBottomModal>
    )
}

export default AppointmentDetailsModal

const styles = StyleSheet.create({
    item: { alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '90%' }
})