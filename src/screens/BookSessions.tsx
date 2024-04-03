import { StyleSheet, View } from 'react-native'
import React, { FC, useState } from 'react'
import StyledRoot from '../components/organisms/StyledRoot'
import SecondaryHeader from '../components/molecules/SecondaryHeader'
import { Props, validateNumbers } from '../utils/utility_functions/UtilityFunctions'
import CustomText from '../components/atoms/CustomText'
import CustomDropdown from '../components/atoms/CustomDropdown'
import CustomInput from '../components/atoms/CustomInput'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import CustomButton from '../components/atoms/CustomButton'
import { useDispatch } from 'react-redux';
import { addAppointment } from '../data_storage/reducers/appointmentsListReducer'

const BookSessions: FC<Props> = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [date, setDate] = useState<string>()
  const [time, setTime] = useState<string>()
  const [duration, setDuration] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [extraInfo, setExtraInfo] = useState<string>('')
  const [mode, setMode] = useState<'date' | 'time'>('date');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false)



  const hideDatePicker = () => {
    setShow(false);
  };

  const handleConfirm = (date: Date) => {
    if (mode == 'date') {
      setDate(date.toLocaleDateString());
    } else {
      setTime(date.toLocaleTimeString());
    }
    hideDatePicker();
  };

  const addAnAppointment = () => {
    dispatch(addAppointment({
      coachName: route?.params?.name,
      id: route?.params?.id,
      image: route?.params?.image,
      date,
      duration,
      location,
      time,
      extraInfo
    }))
    setLoading(false)
    setTimeout(() => { navigation.navigate('Appointments') }, 500)
  }

  return (
    <StyledRoot
      Header={() => <SecondaryHeader
        centerTitle='Book a session'
        onBackPress={() => navigation.goBack()}
      />}
    >
      <CustomText style={{ alignSelf: 'flex-start', marginLeft: 20, fontSize: 14, fontWeight: '600' }}>Coach: {route?.params?.name}</CustomText>
      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', marginBottom: 80 }}>
        <CustomDropdown
          onClick={() => {
            setMode('date')
            setShow(true)
          }}
          text={date ?? 'date'}
        />
        <CustomDropdown
          onClick={() => {
            setMode('time')
            setShow(true)
          }}
          text={time ?? 'time'}
        />
        <CustomInput
          value={duration}
          onChangeText={(val: string) => { if (validateNumbers(val)) setDuration(val) }}
          placeholder={'duration in hours'}
          rootStyle={{ marginTop: 35 }}
        />
        <CustomInput
          value={location}
          onChangeText={(val: string) => { setLocation(val) }}
          placeholder={'set your location'}
          rootStyle={{ marginTop: 35 }}
        />
        <CustomInput
          value={extraInfo}
          onChangeText={(val: string) => { setExtraInfo(val) }}
          placeholder={'Any addtional info?'}
          rootStyle={{ marginTop: 35 }}
        />
      </View>
      <CustomButton
        onPress={() => {
          setLoading(true)
          setTimeout(() => {
            addAnAppointment()
          }, 1000);
        }}
        label='Continue'
        loading={loading}
        disabled={
          !((date ?? '').length > 0 &&
          (time ?? '').length > 0 &&
          duration?.length > 0 &&
          location?.length > 0)
        }
      />
      <DateTimePickerModal
        isVisible={show}
        mode={mode}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </StyledRoot>
  )
}

export default BookSessions


