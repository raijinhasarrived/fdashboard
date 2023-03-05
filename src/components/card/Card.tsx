export const Card = () => {
  return (
    <div className="flex h-[235px] w-[375px] flex-col justify-between rounded-lg bg-zinc-300 from-gray-700 via-gray-900 to-black p-2 font-iceland shadow-lg shadow-black dark:bg-gradient-to-r">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="logo h-10 w-10">
        <path
          fillRule="evenodd"
          d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
          clipRule="evenodd"
        />
      </svg>

      <div className="flex justify-between text-3xl">
        <span>0000</span>
        <span>1111</span>
        <span>2222</span>
        <span>3333</span>
      </div>
      <div className="flex items-center justify-between">
        <h4 className="text-4xl font-semibold tracking-wider text-black dark:text-white">Raijin</h4>
        <span className="text-2xl uppercase tracking-wide">Visa</span>
      </div>
    </div>
  );
};
