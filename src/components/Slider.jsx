import Slider, { SliderTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

const ReactRange = ({ onChange, disabled }) => {
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
        <Slider disabled={disabled} min={50} max={150} defaultValue={100} handle={handle} onChange={onChange}
        handleStyle={{ height: 20, width: 20, marginTop: -8, backgroundColor: '#F87171', border: 0 }}
        railStyle={{ height: 4, borderRadius: 50 }} trackStyle={{ background: 'none' }} />
    );

};
export default ReactRange;