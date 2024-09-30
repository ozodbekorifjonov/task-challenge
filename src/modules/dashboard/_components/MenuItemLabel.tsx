import { Link } from 'react-router-dom';

interface TabLabelProps {
  value: string;
  href?: string;
  showBadge?: boolean;
}

export default function MenuItemLabel({ value, href }: TabLabelProps) {
  return href ? (
    <Link
      to={href}
      className='flex justify-between items-center pr-1 cursor-pointer'
    >
      {value}
    </Link>
  ) : (
    <span className='cursor-pointer'>{value}</span>
  );
}
