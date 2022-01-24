
export interface HomeIconsState {
  homeIconArray: HomeIconTypes[];
  accountsIconArray: HomeIconTypes[];
}
export interface HomeIconTypes {
  id: string;
  title: string;
  press: boolean;
  image: any;
}
