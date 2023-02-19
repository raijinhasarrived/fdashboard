import { Profile } from './Profile';
import { About } from './About';

import avatar from '../../assets/Avatar.jpg';

import useOutside from '../../hooks/useOutside';

import { Visit } from '../popup/Visit';
import { SocialLinks } from '../popup/SocialLinks';
import { CV } from '../popup/CV';

export const ProfileInfo = () => {
  const { ref, isOpen, toggleOpen } = useOutside(false);
  const { ref: secondRef, isOpen: secondIsOpen, toggleOpen: secondToggleOpen } = useOutside(false);
  const { ref: thirdRef, isOpen: thirdIsOpen, toggleOpen: thirdToggleOpen } = useOutside(false);

  return (
    <div className="default flex flex-col min-w-[300px] gap-10">
      <Profile
        popup={toggleOpen}
        popup2={secondToggleOpen}
        popup3={thirdToggleOpen}
        name="Raijin"
        title="React Dev"
        avatar={avatar}
      />
      <div className="border border-black dark:border-white"></div>
      <About />
      {isOpen && <Visit popupRef={ref} close={toggleOpen} />}
      {secondIsOpen && <SocialLinks popupRef={secondRef} close={secondToggleOpen} />}
      {thirdIsOpen && <CV popupRef={thirdRef} close={thirdToggleOpen} />}
    </div>
  );
};
