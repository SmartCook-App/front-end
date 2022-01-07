import React, { FC, useState } from 'react';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import style from './SelectBarStyles';

interface Props {
  onPressFirstModal: any;
  setOnPressFirstModal: any;
  onPressSecondModal: any;
  setOnPressSecondModal: any;
  title: any;
}

const SelectBar: FC<Props> = (props: Props) => {
  const {
    onPressFirstModal,
    setOnPressFirstModal,
    onPressSecondModal,
    setOnPressSecondModal,
    title,
  } = props;
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  const selectDate = () => {
    {
      !onPressFirstModal
        ? setOnPressFirstModal(onPressFirstModal)
        : setOnPressFirstModal(!onPressFirstModal);
    }
    setOnPressSecondModal(!onPressSecondModal);
  };
  const [expanded, setExpanded] = React.useState(false);
  const handlePress = () => setExpanded(!expanded);
  return (
    <List.Accordion
      titleStyle={style.accordionBarText}
      style={style.accordionBar}
      title={title}
      id="1"
      expanded={expanded}
      onPress={handlePress}
    >
      <ScrollView style={style.listItemsContainer}>
        {/* TODO: esto va a depender de los datos que se pasen cuando se conecte con BKND */}
        <List.Item
          onPress={selectDate}
          titleStyle={style.listItemText}
          title="Día 1"
        />
        <List.Item
          onPress={selectDate}
          titleStyle={style.listItemText}
          title="Día 2"
        />
        <List.Item
          onPress={selectDate}
          titleStyle={style.listItemText}
          title="Día 3"
        />
        <List.Item
          onPress={selectDate}
          titleStyle={style.listItemText}
          title="Día 4"
        />
        <List.Item
          onPress={selectDate}
          titleStyle={style.listItemText}
          title="Día 5"
        />
        <List.Item
          onPress={selectDate}
          titleStyle={style.listItemText}
          title="Día 6"
        />
        <List.Item
          onPress={selectDate}
          titleStyle={style.listItemText}
          title="Día 7"
        />
      </ScrollView>
    </List.Accordion>
  );
};

export default SelectBar;
