import { Dimensions, PixelRatio } from "react-native";
const { width, height } = Dimensions.get("window");
const scaleFont = width / 320;

export function normalizeFontSize(size: number) {
  const newSize = size * scaleFont;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const scaleWidth = width / 420;

export function normalizePx(size: number) {
  if (typeof size === "string") {
    return size;
  }
  const newSize = size * scaleWidth;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

# Para usar normalizeFontSize solo tienen que poner normalizeFontSize(número). Este sirve para todo lo que es font 
# Para todo el resto utilizar normalizePx
# Estas funciones lo que hacen es adaptar los valores para todo tipo de tamaño de view
export const pWidth = (p: number) => width * p;
