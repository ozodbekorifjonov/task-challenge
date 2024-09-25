import { AntdButton, AntFlex } from '../../../shared/ui-kit';
import { paths } from '../../../routes/paths';
import Header from '../../../components/Header';

const ModuleHome = () => {
  return (
    <div>
      <Header />
      <div className='layout relative flex flex-col items-center justify-center mt-16 text-center'>
        <h1 className='text-5xl text-violet-900'>Welcome</h1>
        <AntFlex
          gap='small'
          wrap='wrap'
          className='justify-between items-center py-4'
        >
          <AntdButton type='link' href={paths.dashboard.statistics}>
            Dashboard statistics
          </AntdButton>
        </AntFlex>
      </div>
    </div>
  );
};

export default ModuleHome;
