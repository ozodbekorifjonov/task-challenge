import { cn } from '../../utils/tailwindMerge';

interface IProps {
  text: string;
  onClick?: () => void;
  className?: string;
  button: React.ReactElement;
}

const ProductImageCopy = ({ text, className, button }: IProps) => {
  return (
    <div
      className={cn(
        'w-[12rem] h-[12rem] bg-gray100 rounded-[1rem] overflow-hidden p-6 relative group transition-all text-center flex items-center justify-center flex-col gap-4',
        className,
      )}
    >
      <p className='text-p3 text-neutral70'>{text}</p>
      {button}
    </div>
  );
};

export default ProductImageCopy;
