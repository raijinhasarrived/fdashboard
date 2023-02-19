import { Button } from '../button/Button';

interface SLProps {
  popupRef: React.RefObject<HTMLDivElement>;
  close: () => void;
}

export const SocialLinks = ({ popupRef, close }: SLProps) => {
  return (
    <div ref={popupRef} className="popup flex flex-col  bg-lime-600 ">
      <Button onClick={close} />
      <div className="flex items-center justify-center w-full h-full">
        <p>This is the Social Links</p>
      </div>
    </div>
  );
};
