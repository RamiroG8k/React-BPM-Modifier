import Slider, { SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

const ReactRange = ({ onChange }) => {
    const { Handle } = Slider;

    const handle = props => {
        const { value, dragging, index, ...restProps } = props;
        return (
            <SliderTooltip key={index} prefixCls="rc-slider-tooltip"
                overlay={`${value} %`} visible={dragging} placement="top">
                <Handle value={value} {...restProps} />
            </SliderTooltip>
        );
    };

    return (
        <Slider min={50} max={150} defaultValue={100} handle={handle} onChange={onChange}/>
    );

};
export default ReactRange;