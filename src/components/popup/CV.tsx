import { Button } from '../button/Button';

interface CVProps {
  popupRef: React.RefObject<HTMLDivElement>;
  close: () => void;
}

function handleDownload() {
  const fileUrl =
    'https://docs.google.com/document/d/1_y33yFNe4fGid9jREzXOfeUVKdWNfK69/export?format=docx';
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'my-cv.docx';
  link.click();
}

export const CV = ({ popupRef, close }: CVProps) => {
  return (
    <div ref={popupRef} className="popup flex flex-col  bg-violet-600 ">
      <Button onClick={close} />
      <div className="flex items-center justify-center w-full h-full">
        <p>This is the CVs</p>
        <button onClick={handleDownload}>Dload</button>
      </div>
    </div>
  );
};
