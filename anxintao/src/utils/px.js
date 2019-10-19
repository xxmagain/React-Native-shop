import {
    Dimensions,
    Platform,
    PixelRatio
} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
export default function px(size) {
    if(PixelRatio.get()>=3 && Platform.OS=='ios'&&size==1){
        return size
    }
    return deviceWidth/375 * size
}
export {
    deviceWidth,
    deviceHeight
}