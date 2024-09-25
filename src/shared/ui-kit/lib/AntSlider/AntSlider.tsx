import { Slider } from 'antd';

import type { AntSliderSingleProps, AntSliderRangeProps } from './types.ts';

type IProps = AntSliderSingleProps | AntSliderRangeProps;

const AntSlider = (props: IProps) => {
  return <Slider {...props} />;
};

export default AntSlider;
