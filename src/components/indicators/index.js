import React from 'react';
import { Indicator, IndicatorText, IndicatorLegend } from './styles';

function Button({ value, legend, icon }) {
  return (
    <Indicator>
      <div>
        {icon}
      </div>
      <div>
        <IndicatorText>{value}</IndicatorText>
        <IndicatorLegend>{legend}</IndicatorLegend>
      </div>
    </Indicator>
  );
};

export default Button;