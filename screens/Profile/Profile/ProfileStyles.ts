import { StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';
import { normalizeFontSize, normalizePx } from '../../../styles/normalize';

const ProfileStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'column',
    flex: 0.5,
    justifyContent: 'space-evenly',
  },
  headerRowContainer: {
    flexDirection: 'row',
    paddingLeft: normalizePx(30),
  },
  headerTextContainer: {
    flexDirection: 'column',
    paddingLeft: normalizePx(30),
    paddingTop: normalizePx(10),
  },
  filtersContainer: {
    flexDirection: 'row',
    flex: 0.35,
    paddingTop: normalizePx(10),
    paddingLeft: normalizePx(30),
  },
  addFilterContainer: {
    flexDirection: 'column',
  },
  switchContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    fontWeight: 'bold',
  },
  switchContainerText: {
    fontWeight: 'bold',
    fontSize: normalizeFontSize(17),
    color: Colors.light.yellow,
  },
  recipesContainer: {
    flex: 4,
  },
  followButton: {
    backgroundColor: Colors.light.yellow,
    color: Colors.light.yellow,
    borderRadius: normalizePx(50),
    alignItems: 'center',
    padding: normalizePx(10),
    alignSelf: 'stretch',
  },
  addFilterButton: {
    marginRight: normalizePx(10),
    width: normalizePx(62),
    height: normalizePx(62),
    borderRadius: normalizePx(50),
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: Colors.light.greyOfFilters,
  },
  addFilterButtonTitle: {
    fontFamily: 'nunito-light',
    fontSize: normalizeFontSize(12),
    width: normalizePx(65),
    textAlign: 'center',
    color: Colors.light.black,
  },
  textProfile: {
    color: Colors.light.black,
  },
  modalContainer: {
    backgroundColor: Colors.light.white,
    width: normalizePx(350),
    height: normalizePx(350),
    alignSelf: 'center',
    justifyContent: 'flex-start',
    borderRadius: normalizePx(10),
  },
  closeModalCross: {
    alignSelf: 'flex-end',
    marginRight: normalizePx(10),
    marginTop: normalizePx(5),
  },
  modalTitle: {
    alignSelf: 'flex-start',
    marginVertical: normalizePx(10),
    marginLeft: normalizePx(15),
    marginRight: normalizePx(5),
    fontFamily: 'nunito-regular',
    fontSize: normalizeFontSize(14),
  },
  modalTextInput: {
    margin: normalizePx(10),
    padding: normalizePx(10),
    width: normalizePx(300),
    alignSelf: 'center',
    backgroundColor: Colors.light.lightGrey2,
  },
  addCategoryButtonContainer: {
    top: normalizePx(100),
    alignSelf: 'center',
  },
  addCategoryButton: {
    backgroundColor: Colors.light.transparentYellow,
    color: Colors.light.white,
    padding: normalizePx(10),
    borderRadius: normalizePx(10),
    fontFamily: 'nunito-bold',
    fontSize: normalizeFontSize(12),
  },
});

export default ProfileStyles;
