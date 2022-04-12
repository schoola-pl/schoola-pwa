import { Wrapper } from './ReloadWidget.styles';
import reloadSrc from 'assets/icons/ReloadIcon.png';

const ReloadWidget = () => {
  return (
    <Wrapper data-testid="reload-btn" onClick={() => window.location.reload()}>
      {<img src={reloadSrc} alt="reload" />}
    </Wrapper>
  );
};

export default ReloadWidget;
