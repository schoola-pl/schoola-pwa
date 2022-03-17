import { Wrapper } from './ReloadWidget.styles';
import reloadSrc from 'assets/icons/ReloadIcon.png';

const ReloadWidget = () => {
  return <Wrapper onClick={() => window.location.reload()}>{<img src={reloadSrc} alt="reload" />}</Wrapper>;
};

export default ReloadWidget;
