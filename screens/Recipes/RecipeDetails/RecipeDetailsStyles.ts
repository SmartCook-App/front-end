import { normalizeFontSize, normalizePx } from '../../../styles/normalize';
import { StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';

const RecipeDetailsStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  photo: {
    flex: 1,
    resizeMode: 'stretch', // or 'cover'
    opacity: 3,
  },
  centerText: {
    flex: 1,
  },
  blackRectangule: {
    height: normalizePx(240),
    backgroundColor: Colors.light.transparentBlack,
  },
  whatYouNeedContainer: {
    padding: 5,
  },
  bottom: {
    height: normalizePx(170),
    marginTop: normalizePx(475),
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: normalizePx(10),
    paddingHorizontal: normalizePx(10),
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalizePx(10),
  },
  infoText: {
    color: Colors.light.white,
    fontWeight: 'bold',
  },
  title: {
    paddingHorizontal: normalizePx(20),
    fontFamily: 'nunito-light',
    color: Colors.light.white,
    fontSize: normalizeFontSize(25),
  },
  seeRecipeDetailButton: {
    position: 'absolute',
    bottom: normalizePx(55),
    right: normalizePx(20),
    borderRadius: normalizePx(50),
    height: normalizePx(70),
    width: normalizePx(70),
    alignSelf: 'center',
    padding: normalizePx(7),
    backgroundColor: Colors.light.transparentYellow,
  },
  goDownArrow: {
    alignItems: 'center',
    marginTop: normalizePx(100),
  },
  cookerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalizePx(60),
    paddingVertical: normalizePx(15),
  },
  cookerAvatar: {
    backgroundColor: Colors.light.transparentBlack,
    marginVertical: normalizePx(10),
  },
  cookerInfoContainer: {
    flexDirection: 'column',
  },
  cookerInfo: {
    color: Colors.light.white,
    fontWeight: 'bold',
    fontSize: normalizeFontSize(12),
  },
  cookerVisitProfile: {
    color: Colors.light.white,
  },
  portions: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: normalizePx(15),
    paddingHorizontal: normalizePx(110),
    justifyContent: 'space-between',
  },
  portionText: {
    color: Colors.light.white,
    fontWeight: 'bold',
    fontSize: normalizeFontSize(40),
    padding: normalizePx(5),
  },
  nutriCirclesContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: normalizePx(40),
    paddingVertical: normalizePx(30),
    justifyContent: 'space-between',
  },
  myNotesContainer: {
    flex: 1,
    minHeight: normalizePx(50),
    padding: normalizePx(15),
    backgroundColor: Colors.light.darkGray,
    opacity: 0.5,
  },
  myNoteText: {
    color: Colors.light.white,
    fontFamily: 'nunito-bold',
    fontSize: normalizeFontSize(14),
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
  closeSecondModalCross: {
    marginLeft: normalizePx(275),
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
  modalGoBack: {
    alignSelf: 'flex-start',
    marginLeft: normalizePx(10),
    marginTop: normalizePx(5),
  },
  modalTopBarContainer: {
    flexDirection: 'row',
  },
});

export default RecipeDetailsStyles;
