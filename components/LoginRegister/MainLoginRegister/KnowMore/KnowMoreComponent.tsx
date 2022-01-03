import React, { FC } from "react";
import { Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { RootState } from "../../../../redux/store";
import { useSelector } from "react-redux";
import MLRL from "../../../../screens/LoginRegister/MainLoginRegister/MainLoginRegisterLanguages";
import HomeStyle from "../../../../screens/LoginRegister/MainLoginRegister/MainLoginRegisterStyles";

const KnowMore: FC = () => {
  const lang = useSelector<RootState, RootState["language"]>(
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
  ]

  const renderItem = ({item}) => {
    return (
      <View style={HomeStyle.carouselItem}>
        <Text style={HomeStyle.carouselItemTitle}>{item.title}</Text>
        <Text style={HomeStyle.carouselItembody}>{item.text}</Text>
      </View>
    )
  };

  return (
    <View>
      <Carousel
        layout={"default"}
        data={carouselItems}
        sliderWidth={400}
        itemWidth={400}
        renderItem={renderItem}
      />
    </View>
  );
};

export default KnowMore;
