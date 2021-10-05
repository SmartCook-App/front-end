import React, { FC } from "react";
import { Text, View } from "react-native";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";
import Carousel from "react-native-snap-carousel";

interface Props {
  id: any;
}

const KnowMore: FC<Props> = (props: Props) => {

  const state = {
    activeIndex: 0,
    carouselItems: [
      {
          title:"Item 1",
          text: "Text 1",
      },
      {
          title:"Item 2",
          text: "Text 2",
      },
      {
          title:"Item 3",
          text: "Text 3",
      },
    ]
  }

  const renderItem = ({item, index}) => {
    return (
      <View style={{
          backgroundColor:'transparent',
          borderRadius: 5,
          height: 250,
          padding: 50,
          marginLeft: 25,
          marginRight: 25, }}>
        <Text style={{fontSize: 30, color: 'white'}}>{item.title}</Text>
        <Text style={{color: 'white'}}>{item.text}</Text>
      </View>
    )
  };

  return (
    <View>
      <Carousel
        layout={"default"}
        data={state.carouselItems}
        sliderWidth={300}
        itemWidth={300}
        renderItem={renderItem}
      />
    </View>
  );
};

export default KnowMore;
