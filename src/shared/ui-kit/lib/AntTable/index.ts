import {
  SELECTION_ALL,
  SELECTION_COLUMN,
  SELECTION_INVERT,
  SELECTION_NONE,
} from 'antd/es/table/hooks/useSelection';
import { RefTable } from 'antd/es/table/interface';

import AntTableColumn from './AntTableColumn.tsx';
import AntTableColumnGroup from './AntTableColumnGroup.tsx';
import AntTableSummary from './AntTableSummary.tsx';
import InternalTable from './InternalTable.tsx';

type CompoundedComponent = typeof InternalTable &
  RefTable & {
    displayName?: string | undefined;
    SELECTION_COLUMN: typeof SELECTION_COLUMN;
    SELECTION_ALL: typeof SELECTION_ALL;
    SELECTION_INVERT: typeof SELECTION_INVERT;
    SELECTION_NONE: typeof SELECTION_NONE;
    Column: typeof AntTableColumn;
    ColumnGroup: typeof AntTableColumnGroup;
    Summary: typeof AntTableSummary;
  };

const AntTable = InternalTable as CompoundedComponent;
AntTable.Column = AntTableColumn;
AntTable.ColumnGroup = AntTableColumnGroup;
AntTable.Summary = AntTableSummary;
AntTable.SELECTION_NONE = SELECTION_NONE;
AntTable.SELECTION_INVERT = SELECTION_INVERT;
AntTable.SELECTION_COLUMN = SELECTION_COLUMN;
AntTable.SELECTION_ALL = SELECTION_ALL;

export type { AntTableProps, AntTableColumnsType } from './types.ts';
export default AntTable;
