
export interface HomeIconsState {
  homeIconArray: HomeIconTypes[];
  accountsIconArray: HomeIconTypes[];
} 
export interface HomeIconTypes {
    id: string;
    name: string;
    title: string;
    press: boolean;
    height: any;
}
