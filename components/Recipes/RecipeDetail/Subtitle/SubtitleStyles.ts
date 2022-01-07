import { StyleSheet } from 'react-native';
import { normalizeFontSize, normalizePx } from '../../../../styles/normalize';
import Colors from '../../../../assets/Colors';

const SubtitleStyle = StyleSheet.create({
  subtitleContainer: {
    backgroundColor: Colors.light.transparentBlack,
    padding: normalizePx(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'nunito-light',
  },
  subtitle: {
    color: Colors.light.white,
    fontSize: normalizeFontSize(12),
    left: normalizePx(20),
    textTransform: 'uppercase',
  },
  addButton: {
    fontSize: normalizeFontSize(10),
    color: Colors.light.white,
  },
  uploadButton: {
    fontSize: normalizeFontSize(10),
    color: Colors.light.white,
    alignSelf: 'center',
  },
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.light.darkGrey3,
  },
  modalView: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    elevation: normalizePx(5),
    transform: [{ translateX: -(400 * 0.4) }, { translateY: -90 }],
    height: normalizePx(250),
    width: normalizePx(400 * 0.8),
    backgroundColor: Colors.light.background,
    borderRadius: normalizePx(7),
  },
  textInput: {
    width: '80%',
    height: '70%',
    borderRadius: normalizePx(5),
    paddingVertical: normalizePx(8),
    paddingHorizontal: normalizePx(16),
    borderColor: Colors.light.darkGrey3,
    borderWidth: normalizePx(1),
    marginBottom: normalizePx(8),
    textAlignVertical: 'top',
  },
  uploadButtonContainer: {
    backgroundColor: Colors.light.black,
    height: normalizePx(30),
    width: normalizePx(80),
    justifyContent: 'center',
    borderRadius: normalizePx(20),
  },
  myNotesTitle: {
    fontSize: normalizePx(20),
  },
});
export default SubtitleStyle;
