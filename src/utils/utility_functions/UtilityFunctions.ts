import { Dimensions } from 'react-native';



const dimensions = Dimensions.get('window')
export const height = dimensions.height
export const width = dimensions.width


export interface Props {
    navigation?: any,
    route?: any
}

export const rearrangeDateFormat = (date: string | undefined) => {
    if (date == undefined || date == null) return ""
    const splittedDate = date?.split('T')[0];
    let newDate = splittedDate[2] + '-' + splittedDate[1] + '-' + splittedDate[0];
    return newDate;
};

export const extractTime = (date: string | undefined) => {
    if (date == undefined || date == null) return ""
    const splittedDate = date?.split('T')[1].split('.')[0];
    // let newTime = splittedDate[2] + '-' + splittedDate[1] + '-' + splittedDate[0];
    return splittedDate;
};

// validate number-only
export const validateNumbers = (value: string) => {
    if (Number.isNaN(Number(value))) {
        return false;
    } else {
        return true;
    }
}

