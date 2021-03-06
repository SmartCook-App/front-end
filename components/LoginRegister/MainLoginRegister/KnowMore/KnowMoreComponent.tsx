import React, { FC } from 'react';
import { Text, View } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { RootState } from '../../../../redux/store';
import { normalizePx } from '../../../../styles/normalize';
import { useSelector } from 'react-redux';
import MLRL from '../../../../screens/LoginRegister/MainLoginRegister/MainLoginRegisterLanguages';
import style from './KnowMoreStyles';
const KnowMore: FC = () => {
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );

  const carouselItems = [
    {
      title: MLRL[lang]?.slideTitle1,
      text: MLRL[lang]?.slideDescription1,
    },
    {
      title: MLRL[lang]?.slideTitle2,
      text: MLRL[lang]?.slideDescription2,
    },
    {
      title: MLRL[lang]?.slideTitle3,
      text: MLRL[lang]?.slideDescription3,
    },
    {
      title: MLRL[lang]?.slideTitle4,
      text: MLRL[lang]?.slideDescription4,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={style.carouselItem}>
        <Text style={style.carouselItemTitle}>{item.title}</Text>
        <Text style={style.carouselItembody}>{item.text}</Text>
      </View>
    );
  };

  return (
    <View>
      <Carousel
        layout={'default'}
        data={carouselItems}
        sliderWidth={normalizePx(400)}
        itemWidth={normalizePx(400)}
        renderItem={renderItem}
      />
    </View>
  );
};

export default KnowMore;
