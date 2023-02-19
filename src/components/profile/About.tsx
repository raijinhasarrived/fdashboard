import { Icons } from '../../assets/icons/Icons';

export const About = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h4 className="text-black dark:text-white font-semibold text-lg">About</h4>
        <p className="font-medium text-base">Admin Dashboard created with:</p>
      </div>
      <div className="flex flex-col gap-2">
        {Icons.map((tool, index) => (
          <a
            className="flex items-center gap-2 grayscale-0 sm:grayscale hover:grayscale-0"
            href={tool.link}
            key={index}
            target="_blank">
            <img src={tool.icon} alt="icon" key={index} width={20} height={20} />
            <span className="text-black dark:text-white">{tool.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};
