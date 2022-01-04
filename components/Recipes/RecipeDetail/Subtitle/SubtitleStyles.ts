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
    color: 'white',
    alignSelf: 'center',
  },
  screen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  viewWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
    backgroundColor: '#fff',
    borderRadius: normalizePx(7),
  },
  textInput: {
    width: '80%',
    height: '70%',
    borderRadius: normalizePx(5),
    paddingVertical: normalizePx(8),
    paddingHorizontal: normalizePx(16),
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: normalizePx(1),
    marginBottom: normalizePx(8),
    textAlignVertical: 'top',
  },
  uploadButtonContainer: {
    backgroundColor: 'black',
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
