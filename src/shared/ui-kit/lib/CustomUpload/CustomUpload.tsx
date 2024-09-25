import { Upload, UploadProps } from 'antd';
const { Dragger } = Upload;
interface IProps extends UploadProps {
  loading?: number;
  title: string;
  subTitle: string;
}

const CustomUpload = ({ loading = 0, title, subTitle, ...rest }: IProps) => {
  if (loading) {
    return (
      <div className='rounded-[1rem]  w-[12rem] h-[12rem] flex flex-col items-center justify-center bg-neutral100 py-[2.12rem] gap-4 cursor-pointer relative overflow-hidden'>
        <p className='title-h5 text-white100 relative z-[2]'>{loading}%</p>
        <div
          className='absolute w-full bg-link100 bottom-0'
          style={{
            height: `${loading}%`,
          }}
        ></div>
      </div>
    );
  }
  return (
    <div className='w-[12rem] h-[12rem]'>
      <Dragger {...rest} showUploadList={false}>
        <div className='flex flex-col items-center justify-center   gap-4 cursor-pointer'>
          <img
            src="data:image/svg+xml,%3Csvg width='46' height='40' viewBox='0 0 46 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M38.5537 0H7.44616C3.54154 0 0.364502 3.17699 0.364502 7.07357V32.9264C0.364502 36.823 3.54154 40 7.44616 40H38.5537C42.4583 40 45.6353 36.823 45.6353 32.9264V7.07357C45.6353 3.17699 42.4583 0 38.5537 0ZM43.2101 23.6459C27.9474 22.6273 22.1592 16.0388 20.0492 12.1261C19.4914 11.0832 18.5214 10.3153 17.3815 10.0161C16.2497 9.71708 15.0856 9.8949 14.0913 10.5174L2.78973 17.6233V7.07357C2.78973 4.51088 4.87543 2.42522 7.44616 2.42522H38.5537C41.1244 2.42522 43.2101 4.51088 43.2101 7.07357V23.6459Z' fill='%230071E3'/%3E%3Cpath d='M33.4284 16.7178C36.1072 16.7178 38.2788 14.5462 38.2788 11.8674C38.2788 9.18854 36.1072 7.01692 33.4284 7.01692C30.7496 7.01692 28.5779 9.18854 28.5779 11.8674C28.5779 14.5462 30.7496 16.7178 33.4284 16.7178Z' fill='%230071E3'/%3E%3C/svg%3E"
            alt='uploadimage'
          />
          <div className='flex items-center flex-col justify-center text-center'>
            <p className='link-h2-medium text-neutral100'>{title}</p>
            <p className='text-p3 text-neutral50'>{subTitle}</p>
          </div>
        </div>
      </Dragger>
    </div>
  );
};

export default CustomUpload;
