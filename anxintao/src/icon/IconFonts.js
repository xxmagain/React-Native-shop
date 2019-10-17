import createIconSet from 'react-native-vector-icons/lib/create-icon-set';

var glyphMap = {
    "shouye":58898,
    "shouye1":58907,
    "icon":58962,
    "shouye2":58901,
}

var IconFont = createIconSet(glyphMap, 'iconfont', 'iconfont.ttf');

module.exports = IconFont;
module.exports.glyphMap = glyphMap;