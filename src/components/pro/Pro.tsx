import reactIcon from '../../assets/yo.png';

export const Pro = () => {
  return (
    <div className="flex flex-col default items-center">
      <button>
        <img className="w-16 h-16" src={reactIcon} alt="react-icon" />
      </button>
      <h4 className="font-semibold text-md text-black dark:text-white">Upgrade to Pro</h4>
      <p className="font-medium text-xs text-center">Check your magic on this Pro Dashboard</p>
    </div>
  );
};
