import MaterialReactTable from "material-react-table";
import PropTypes from 'prop-types';
const Table = ({
  title = "",
  columns = [],
  data = [],
  RowActions = null,
  enableRowSelection = false,
  enableSelectAll = false,
  renderTopToolbarCustomActions = () => {},
  enablePagination = true,
  isLoading = false,
  renderDetailPanel = false,
  positionActionsColumn = "last",
}) => {
  return (
    <MaterialReactTable
      initialState={{ density: "compact" }}
      muiTableHeadCellProps={{
        align: "justify",
      }}
      enableRowActions={RowActions !== null}
      muiTableBodyCellProps={{
        align: "justify",
      }}
      muiTableProps={{
        sx: {
          tableLayout: "inherit",
        },
      }} 
      columns={columns}
      data={data}
      renderRowActions={RowActions}
      enableRowSelection={enableRowSelection}
      enableSelectAll={enableSelectAll}
      enableColumnFilterModes
      positionActionsColumn={positionActionsColumn}
      muiTableHeadRowProps={{
        sx: { backgroundColor: "rgb(245, 240, 249)" },
      }}
      state={{
        showSkeletons: isLoading,
        showProgressBars: isLoading,
      }}
      renderDetailPanel={renderDetailPanel}
      renderTopToolbarCustomActions={renderTopToolbarCustomActions}
      muiTablePaperProps={{
        elevation: 5, //change the mui box shadow
        //customize paper styles
        sx: {
          borderRadius: "3",
          border: "1px solid #e0e0e0",
        },
      }}
      enablePagination={enablePagination}
    />
  );
};
Table.propTypes = {
  title : PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.array,
  enableRowSelection: PropTypes.any,
  RowActions: PropTypes.any,
  enableSelectAll: PropTypes.bool,
  renderTopToolbarCustomActions: PropTypes.any,
  enablePagination: PropTypes.bool,
  isLoading: PropTypes.bool,
  renderDetailPanel: PropTypes.any,
  positionActionsColumn: PropTypes.string,
};
export default Table;
