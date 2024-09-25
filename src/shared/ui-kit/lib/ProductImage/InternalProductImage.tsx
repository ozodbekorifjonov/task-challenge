import { cn } from '../../utils/tailwindMerge';

interface IProps {
  src: string;
  icon?: React.ReactElement;
  onDelete?: () => void;
  className?: string;
  buttonClassName?: string;
}

const InternalProductImage = ({
  src,
  icon,
  onDelete,
  className,
  buttonClassName,
}: IProps) => {
  return (
    <div
      className={cn(
        'w-[12rem] h-[12rem] bg-gray100 rounded-[1rem] overflow-hidden p-6 relative group transition-all',
        className,
      )}
    >
      {icon ? (
        <button
          type='button'
          onClick={onDelete}
          className={cn(
            'absolute left-3 top-3 bg-white100 rounded-full w-10 h-10 flex items-center justify-center cursor-pointer group-hover:opacity-100 opacity-0 transition-all group-hover:transition-all group-hover:duration-300 duration-300',
            buttonClassName,
          )}
        >
          {icon}
        </button>
      ) : null}

      <img
        src={src}
        alt=''
        width={192}
        height={192}
        className='w-full h-full object-cover aspect-square bg-transparent'
      />
    </div>
  );
};

export default InternalProductImage;
