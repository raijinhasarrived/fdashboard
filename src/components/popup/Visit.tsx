import { Button } from '../button/Button';

interface VisitProps {
  popupRef: React.RefObject<HTMLDivElement>;
  close: () => void;
}

export const Visit = ({ popupRef, close }: VisitProps) => {
  return (
    <div ref={popupRef} className="popup flex flex-col  bg-rose-600 ">
      <Button onClick={close} />
      <div className="flex items-center justify-center w-full h-full">
        <p>This is the popup window.</p>
      </div>
    </div>
  );
};
