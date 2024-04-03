import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomBottomModal from '../../components/organisms/CustomBottomModal'
import { height } from '../../utils/utility_functions/UtilityFunctions'
import CustomButton from '../../components/atoms/CustomButton'
import CustomText from '../../components/atoms/CustomText'
import { useDispatch } from 'react-redux';
import { removeAppointment } from '../../data_storage/reducers/appointmentsListReducer'

const RemoveAppointmentModal = ({ data, openModal, setOpenModal, close }) => {
    const dispatch = useDispatch();

    const remove = () => {
        dispatch(removeAppointment(data))
        setTimeout(() => { close() }, 500)
    }
    return (
        <CustomBottomModal
            modalVisible={openModal}
            closeModal={setOpenModal}
            headerText={'Remove Appointment'}
            useConstantHeight={true}
            constantHeight={height * 0.25}
        >
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                <CustomText>Are you sure you want to remove this appointment?</CustomText>
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
                    onPress={() => { remove() }}
                />
            </View>
        </CustomBottomModal>
    )
}

export default RemoveAppointmentModal

const styles = StyleSheet.create({
    item: { alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', width: '90%' }
})