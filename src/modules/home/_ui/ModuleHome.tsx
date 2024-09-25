import { AntdButton, AntFlex } from '../../../shared/ui-kit';
import { paths } from '../../../routes/paths';
import Header from '../../../components/Header';

const ModuleHome = () => {
  return (
    <div>
      <Header />
      <div className='layout relative flex flex-col items-center justify-center mt-16 text-center'>
        <AntFlex
          gap='small'
          wrap='wrap'
          className='justify-between items-center py-4'
        >
          <AntdButton type='link' href={paths.dashboard.overview}>
            Hello
          </AntdButton>
        </AntFlex>
        <h1>Hello</h1>
      </div>
    </div>
  );
};

export default ModuleHome;
