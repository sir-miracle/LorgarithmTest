import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useState } from 'react'
import StyledRoot from '../components/organisms/StyledRoot'
import CustomText from '../components/atoms/CustomText'
import { colors } from '../themes/colors'
import { Props } from '../utils/utility_functions/UtilityFunctions'
import ArrowIcon from '../assets/svgs/arrow_front.svg'
import AppointmentDetailsModal from './modals/AppointmentDetailsModal'
import { useSelector } from 'react-redux';
import RemoveAppointmentModal from './modals/RemoveAppointmentModal'


const Appointments: FC<Props> = ({ navigation }) => {
  const appointmentsList = useSelector((state: any) => state.appointmentsList);
  const [showRemoveAppointmentModal, setShowRemoveAppointmentModal] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false)
  const [selectedData, setSelectedData] = useState<object>({})

  const RenderAppointments = ({ item, onPress }: { item: any, onPress: (item: any) => {} }) => {
    return (
      <TouchableOpacity style={styles.coachesRapper} onPress={() => onPress(item)}>
        <View style={{ flexDirection: 'row', alignItems: 'center', width: '70%', paddingHorizontal: 5 }}>
          <Image
            source={{ uri: item?.image }}
            style={{ width: 40, height: 40, borderRadius: 20, marginRight: 10 }}
            resizeMode={'contain'}
          />
          <Text>{item?.coachName}</Text>
        </View>
        <ArrowIcon />
      </TouchableOpacity>
    )
  }
  return (
    <StyledRoot useScrollFlex enableScroll={false}>
      <CustomText style={styles.avail}>
        My Appointments
      </CustomText>
      <View style={{ width: '100%', flex: 1, marginTop: 20 }}>
        <FlatList
          data={appointmentsList.dummyAppointments}
          renderItem={({ item }) => <RenderAppointments
            item={item} onPress={(item) => {
              setSelectedData(item)
              setOpenModal(true)
            }}
          />}
        />
      </View>
      <AppointmentDetailsModal
        openModal={openModal}
        setOpenModal={() => setOpenModal(false)}
        headerText={'Appointment Details'}
        data={selectedData}
        close={() => setOpenModal(false)}
        remove={() => {
          setOpenModal(false)
          setTimeout(() => { setShowRemoveAppointmentModal(true) }, 500)
        }}
      />

      <RemoveAppointmentModal
        openModal={showRemoveAppointmentModal}
        setOpenModal={() => setShowRemoveAppointmentModal(false)}
        close={() => setShowRemoveAppointmentModal(false)}
        data={selectedData?.id}

      />
    </StyledRoot>
  )
}

export default Appointments

const styles = StyleSheet.create({
  coachesRapper: {
    width: '95%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: colors.GreyGoose,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 10,
    padding: 10
  },
  avail: {
    fontSize: 20
  }
})