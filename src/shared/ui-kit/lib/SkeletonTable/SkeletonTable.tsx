import { Skeleton, Table } from 'antd';

import { SkeletonTableProps } from '../../types/commonTypes.ts';

export default function SkeletonTable({
  loading = false,
  active = false,
  rowCount = 5,
  columns,
  children,
  className,
}: SkeletonTableProps): JSX.Element {
  return loading ? (
    <Table
      rowKey='key'
      pagination={false}
      dataSource={[...Array(rowCount)].map((_, index) => ({
        key: `key${index}`,
      }))}
      columns={columns.map((column) => {
        return {
          ...column,
          render: function renderPlaceholder() {
            return (
              <Skeleton
                key={column.key}
                title
                active={active}
                paragraph={false}
                className={className}
              />
            );
          },
        };
      })}
    />
  ) : (
    <>{children}</>
  );
}
