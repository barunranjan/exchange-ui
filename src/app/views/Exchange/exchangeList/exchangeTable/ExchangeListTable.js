/* //https://codesandbox.io/embed/react-bootstrap-table-next-basic-example-e8jbl */

import * as columnFormatters from "./ActionsColumnFormatter";

import {
  NoRecordsFoundMessage,
  PleaseWaitMessage,
} from "../../../../../components/pagination/TablePaginationHelpers";
import paginationFactory, {
  PaginationProvider,
} from "react-bootstrap-table2-paginator";

import BootstrapTable from "react-bootstrap-table-next";
import { Pagination } from "./../../../../../components/pagination/Pagination";
import React from "react";

const ExchangeListTable = (props) => {
  const { apiConfigs, loading } = props;
  console.log(apiConfigs);

  const columns = [
    {
      dataField: "name",
      text: "Name",
    },
    {
      dataField: "description",
      text: "Description",
    },
    {
      dataField: "inputType",
      text: "Input Type",
      formatter: (cell, row) => {
        return cell.map((name, i) => <span key={i}>{name}, </span>);
      },
    },
    {
      dataField: "outputType",
      text: "Output Type",
      formatter: (cell, row) => {
        return cell.map((name, i) => <span key={i}>{name}, </span>);
      },
    },
    {
      dataField: "action",
      text: "Actions",
      formatter: columnFormatters.ActionsColumnFormatter,
      formatExtraData: {
        onEditExchange: props.onEditExchange,
        openDeleteExchange: props.openDeleteExchange,
        // openCourseModal: props.openCourseModal,
      },
      classes: "text-right pr-0",
      headerClasses: "text-right pr-3",
      style: {
        minWidth: "200px",
      },
    },
  ];
  return (
    <>
      <PaginationProvider
        pagination={paginationFactory({
          custom: true,
          totalSize: apiConfigs.length,
          page: 1,
          sizePerPage: 10,
          hideSizePerPage: apiConfigs.length === 0,
          sizePerPageList: [
            {
              text: "10",
              value: 10,
            },
            {
              text: "25",
              value: 25,
            },
            {
              text: "50",
              value: 50,
            },
          ],
        })}
        keyField="id"
        columns={columns}
        data={apiConfigs}
      >
        {({ paginationProps, paginationTableProps }) => (
          <Pagination
            isLoading={loading}
            paginationProps={paginationProps}
            hideToolbar={false}
          >
            <BootstrapTable
              wrapperClasses="table-responsive"
              bordered={false}
              classes="table table-head-custom table-vertical-center no-wrap v-middle"
              keyField="id"
              data={apiConfigs}
              columns={columns}
              noDataIndication={
                <div className="text-center">No User Found</div>
              }
              {...paginationTableProps}
            >
              <PleaseWaitMessage entities={apiConfigs} />
              <NoRecordsFoundMessage entities={apiConfigs} />
            </BootstrapTable>
          </Pagination>
        )}
      </PaginationProvider>
    </>
  );
};

export default ExchangeListTable;
