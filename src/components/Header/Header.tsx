import { AntFlex } from '../../shared/ui-kit';

function Header() {
  return (
    <div className='container mx-auto max-w-screen-lg'>
      <AntFlex gap='small' wrap='wrap' className='justify-end py-4'>
        Hello
      </AntFlex>
    </div>
  );
}

export default Header;
