import TableCustom from "components/page/dashboard/TableCustom";
import type { NextPage } from "next";
import Head from "next/head";

const Dashboard: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ChiPoPo</title>
        <meta name="description" content="I'm Front-end developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TableCustom data={mockData} titleRow={titleRow} />
    </div>
  );
};

export default Dashboard;

const mockData: any = [
  {
    no: 10001,
    detail: "Smart Watch 2022",
    status: "Delivered",
    date: "31/08/2022",
    total: "$200.00",
  },
  {
    no: 10002,
    detail: "Smart Watch 2022",
    status: "Delivered",
    date: "31/08/2022",
    total: "$200.00",
  },
  {
    no: 10003,
    detail: "Smart Watch 2022",
    status: "Delivered",
    date: "31/08/2022",
    total: "$200.00",
  },
  {
    no: 10004,
    detail: "Smart Watch 2022",
    status: "Delivered",
    date: "31/08/2022",
    total: "$200.00",
  },
  {
    no: 10005,
    detail: "Smart Watch 2022",
    status: "Delivered",
    date: "31/08/2022",
    total: "$200.00",
  },
  {
    no: 10006,
    detail: "Smart Watch 2022",
    status: "Delivered",
    date: "31/08/2022",
    total: "$200.00",
  },
  {
    no: 10007,
    detail: "Smart Watch 2022",
    status: "Delivered",
    date: "31/08/2022",
    total: "$200.00",
  },
];

const titleRow = [
  { title: "No", field: "no" },
  { title: "Detail", field: "detail" },
  { title: "Status", field: "status" },
  { title: "Date", field: "date" },
  { title: "Total", field: "total" },
];
