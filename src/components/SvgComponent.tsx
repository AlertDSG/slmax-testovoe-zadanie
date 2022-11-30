import React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

export const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      d="m.74 8.845 3.52-3.829L.74 1.187"
      stroke="#000"
      strokeWidth={0.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
