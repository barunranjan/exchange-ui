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
  console.log(apiConfigs, props.queryParams);

  const handlePageChange = (page, sizePerPage) => {
    props.fetchData(page, sizePerPage);
  }

  const handleSizePerPageChange = (sizePerPage) => {
    // When changing the size per page always navigating to the first page
    props.fetchData(1, sizePerPage);
  }

  const columns = [
    {
      dataField: "apiName",
      text: "Name",
    },
    {
      dataField: "apiDesc",
      text: "Description",
    },
    {
      dataField: "inputParams",
      text: "Input Type",
      formatter: (cell, row) => {
        return cell.map((type, i) => (<span key={i}>{type.paramName} - {type.paramType}, </span>));
      },
    },
    {
      dataField: "outputParams",
      text: "Output Type",
      formatter: (cell, row) => {
        return cell.map((type, i) => (<span key={i}>{type.paramName} - {type.paramType}, </span>));
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
          // totalSize: apiConfigs.length,
          // page: 3,
          // sizePerPage: 10,
          onPageChange: handlePageChange,
          onSizePerPageChange: handleSizePerPageChange,
          ...props.queryParams,
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
              bootstrap4
              remote
              classes="table table-head-custom table-vertical-center no-wrap v-middle"
              keyField="id"
              data={apiConfigs}
              columns={columns}
              onTableChange = {(type, newState) => {
                // handle any data change here
              }}
              noDataIndication={
                <div className="text-center">No Data Found</div>
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
