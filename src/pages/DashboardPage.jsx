const DashboardPage = () => {
  var d = new Date();
  d.setDate(d.getDate() - 5);

  return (
    <div className="dashboard">
      {/* begin::Row */}
      <h4 className="title mb-5">Dashboard KPI</h4>
      <div
        className="row gy-5 g-xl-8 mb-5"
        style={{ minHeight: "500px", height: "600px" }}
      ></div>
    </div>
  );
};

export default DashboardPage;
