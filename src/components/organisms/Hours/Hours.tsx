import { Hour, HoursWrapper } from './Hours.styles';

const Hours = () => {
  return (
    <HoursWrapper>
      <Hour>
        8:00 <button>x</button>
      </Hour>
      <Hour>
        8:55 <button>x</button>
      </Hour>
      <Hour>
        9:50 <button>x</button>
      </Hour>
      <Hour>
        10:55 <button>x</button>
      </Hour>
      <Hour>
        11:50 <button>x</button>
      </Hour>
      <Hour>
        12:35 <button>x</button>
      </Hour>
    </HoursWrapper>
  );
};

export default Hours;
