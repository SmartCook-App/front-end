import React, { FC, useState, useRef } from "react";
import { Text, View, ScrollView } from "react-native";
import UpperTitle from "../../components/UpperTitleComponent";
import FiltersComponentsStyle from "../../styles/HomeComponentsStyle/FiltersComponentsStyle";
import OvalFilterComponent from "../../components/HomeComponents/OvalFilterComponent";
import RoundFiltersComponents from "../../components/HomeComponents/RoundFiltersComponents";
import FL from "../../assets/Languages/FiltersLanguages";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CFL from "../../assets/Languages/CircleFiltersLanguages";
import IndexScreenStyle from "../../styles/HomeComponentsStyle/IndexScreenStyle";
import { useTransition, animated } from "@react-spring/native";
/** Constants */
const AnimatedView: any = animated(View);

const ListItemHeight = 190;
import data from "./data";
/** Constants */

const IndexScreen: FC = () => {
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );
  var listNamesFilters = Object.values(FL[lang]);

  // esto hay que eliminarlo dps cuando tengamos la base de datos
  const listPictures = {
    foto1: {
      img: require("../../assets/Images/LoginImg/loginBackground.jpeg"),
      time: "30 min",
      likes: "90",
      name: "Pan de arandanos",
    },
    foto2: {
      img: require("../../assets/Images/LoginImg/loginBackground.jpeg"),
      time: "20 min",
      likes: "40",
      name: "Bowl de lechuga",
    },
    foto3: {
      img: require("../../assets/Images/LoginImg/loginBackground.jpeg"),
      time: "70 min",
      likes: "10",
      name: "Mouse de chocolate",
    },
    foto4: {
      img: require("../../assets/Images/LoginImg/loginBackground.jpeg"),
      time: "30 min",
      likes: "90",
      name: "Pan de arandanos",
    },
    foto5: {
      img: require("../../assets/Images/LoginImg/loginBackground.jpeg"),
      time: "30 min",
      likes: "90",
      name: "Pan de arandanos",
    },
    foto6: {
      img: require("../../assets/Images/LoginImg/loginBackground.jpeg"),
      time: "30 min",
      likes: "90",
      name: "Pan de arandanos",
    },
    foto7: {
      img: require("../../assets/Images/LoginImg/loginBackground.jpeg"),
      time: "30 min",
      likes: "90",
      name: "Pan de arandanos",
    },
    foto8: {
      img: require("../../assets/Images/LoginImg/loginBackground.jpeg"),
      time: "30 min",
      likes: "90",
      name: "Pan de arandanos",
    },
  };
  const [edges, _set] = useState(data);
  let height = 150;
  const transitions = useTransition(
    edges?.map((data, i) => ({ ...data, y: -(i * ListItemHeight) })),
    {
      key: (item: any) => item.name,
      from: { height: height, opacity: 0 },
      leave: { height: height, opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height }),
    }
  );

  return (
    <View>
      <View>
        <UpperTitle content="SMARTCOOK" />
      </View>
      <View style={IndexScreenStyle.welcomeText}>
        <Text> Hola Usuario</Text>
        <Text> Ya sabes que cocinar hoy?</Text>
      </View>
      <View style={FiltersComponentsStyle.container}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {listNamesFilters.map((item: any) => (
            <OvalFilterComponent value={item} />
          ))}
        </ScrollView>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ minHeight: 1 * ListItemHeight }}
            style={{
              backgroundColor: "red",
              flexDirection: "row",
            }}
          >
            {transitions(
              (style, item, _, index) => (
                console.log(item),
                (
                  <AnimatedView
                    style={{
                      zIndex: data.length - index,
                      bottom: 150,
                      height: style.height,
                      opacity: style.opacity,
                    }}
                    key={item.name}
                  >
                    <RoundFiltersComponents
                      name={"flame-outline"}
                      title={CFL[lang].popular}
                    />
                    <RoundFiltersComponents
                      name={"flashlight-outline"}
                      title={CFL[lang].cookers}
                    />
                    <RoundFiltersComponents
                      name={"flask-outline"}
                      title={CFL[lang].alcoholicBeverages}
                    />
                    <RoundFiltersComponents
                      name={"flash-off-outline"}
                      title={CFL[lang].chilean}
                    />
                    <RoundFiltersComponents
                      name={"flash-outline"}
                      title={CFL[lang].dessert}
                    />
                    <RoundFiltersComponents
                      name={"flag-outline"}
                      title={CFL[lang].salad}
                    />
                    <RoundFiltersComponents
                      name={"beaker-outline"}
                      title={CFL[lang].popular}
                    />
                    <RoundFiltersComponents
                      name={"rose-outline"}
                      title={CFL[lang].popular}
                    />
                    <RoundFiltersComponents
                      name={"flower-outline"}
                      title={CFL[lang].popular}
                    />
                    {/* </View> */}
                  </AnimatedView>
                )
              )
            )}
          </ScrollView>
          {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={FiltersComponentsStyle.direction}>
              <RoundFiltersComponents
                name={"flame-outline"}
                title={CFL[lang].popular}
              />
              <RoundFiltersComponents
                name={"flame-outline"}
                title={CFL[lang].cookers}
              />
              <RoundFiltersComponents
                name={"flame-outline"}
                title={CFL[lang].alcoholicBeverages}
              />
              <RoundFiltersComponents
                name={"flame-outline"}
                title={CFL[lang].juices}
              />
              <RoundFiltersComponents
                name={"flame-outline"}
                title={CFL[lang].chilean}
              />
              <RoundFiltersComponents
                name={"flame-outline"}
                title={CFL[lang].dessert}
              />
              <RoundFiltersComponents
                name={"flame-outline"}
                title={CFL[lang].salad}
              />
              <RoundFiltersComponents
                name={"flame-outline"}
                title={CFL[lang].popular}
              />
              <RoundFiltersComponents
                name={"flame-outline"}
                title={CFL[lang].popular}
              />
              <RoundFiltersComponents
                name={"flame-outline"}
                title={CFL[lang].popular}
              />
            </View>
          </ScrollView> */}
        </View>
      </View>
      {/* <ScrollView>
        {Object.entries(listPictures).forEach(([key, value]) =>
          console.log(value)
        )}
      </ScrollView> */}
    </View>
  );
};
export default IndexScreen;
