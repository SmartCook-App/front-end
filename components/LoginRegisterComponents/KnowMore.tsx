import React, { FC } from "react";
import { Text, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";
import LRL from "../../assets/Languages/LoginRegisterLanguage";
import HomeStyle from "../../styles/HomeStyles";

const KnowMore: FC = () => {
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );

  const carouselItems = [
      {
        title: LRL[lang]?.slideTitle1,
        text: LRL[lang]?.slideDescription1,
      },
      {
        title: LRL[lang]?.slideTitle2,
        text: LRL[lang]?.slideDescription2,
      },
      {
        title: LRL[lang]?.slideTitle3,
        text: LRL[lang]?.slideDescription3,
      },
      {
        title: LRL[lang]?.slideTitle4,
        text: LRL[lang]?.slideDescription4,
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
