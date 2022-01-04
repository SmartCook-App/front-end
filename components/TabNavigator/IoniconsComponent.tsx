import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';
import style from './IoniconsStyles';

interface Props {
  name: any;
}

const IoniconsComponent: FC<Props> = (props: Props) => {
  const { name } = props;
  return <Ionicons name={name} style={style.icon} size={36} />;
};
export default IoniconsComponent;
