import React from 'react';
import ReactSlider from 'react-slider';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';

const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 3px;
`;

const StyledThumb = styled.div`
  height: 25px;
  line-height: 25px;
  width: 25px;
  text-align: center;
  border: 1px solid #07878b;
  background-color: #fff;
  color: #07878b;
  border-radius: 50%;
  cursor: grab;
  bottom: -12.5px;
  font-size: 10px;
  z-index: 0 !important;
`;

const Thumb = (props, state) => (
  <StyledThumb {...props}>
    <FontAwesomeIcon icon={faGripLinesVertical} />
  </StyledThumb>
);

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${props =>
    props.index === 2 ? '#ddd' : props.index === 1 ? '#07878b' : '#ddd'};
  border-radius: 999px;
`;

const Track = (props, state) => <StyledTrack {...props} index={state.index} />;

const Slider = props => (
  <StyledSlider
    defaultValue={[50, 75]}
    renderTrack={Track}
    renderThumb={Thumb}
  />
);

export default Slider;
