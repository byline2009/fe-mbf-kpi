/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import moment from "moment";
import { ErrorMessage, Form, Formik } from "formik";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerField } from "../components/widgets/datePickers/DatePickerField";
import * as Yup from "yup";
var x = new Date();
x.setDate(1);
x.setMonth(x.getMonth());
const INIT_VALUES = {
  selectMonth: x,
};
const DashboardPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [initTop, setInitTop] = useState(92);
  const [isSticky, setIsSticky] = useState(false);
  const [initValues, setInitValues] = useState(INIT_VALUES);
  const formSchema = Yup.object().shape({});
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        const scrollTop = window.scrollY;
        scrollTop >= initTop && !isSticky
          ? setIsSticky(true)
          : setIsSticky(false);
        console.log("scrollTop", scrollTop);
      },
      true
    );

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className="dashboard">
      {/* begin::Row */}
      <div className="d-flex justify-content-start align-items-center mb-2">
        <h4 className=" text-center">Dashboard KPI</h4>

        <div className="d-flex select-filter ms-5">
          <Formik
            enableReinitialize={true}
            initialValues={initValues}
            validationSchema={formSchema}
            onSubmit={async (values, { resetForm }) => {
              setInitValues({
                selectMonth: values.selectMonth,
              });
            }}
          >
            {(formikProps) => {
              return (
                <Form>
                  <div className=" filter me-5">
                    <div className="filter-body d-flex flex-start">
                      <div className="select-filter">
                        <label
                          htmlFor="selectMonth"
                          className="form-label fs-6 fw-bold text-dark me-2"
                        >
                          Tháng
                        </label>
                        <DatePickerField
                          showMonthYearPicker={true}
                          name={`selectMonth`}
                          dateFormat="MM/yyyy"
                          disabled={false}
                          callbackSetDate={(e) => {
                            setInitValues({
                              ...initValues,
                              selectMonth: e,
                            });
                          }}
                        ></DatePickerField>

                        <div className="text-danger">
                          <ErrorMessage name="selectMonth" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>

      <div className={`table-responsive ${isSticky ? "isSticky" : ""} `}>
        <table className="table table-dashboard align-middle gs-0 gy-3 sticky-thc">
          <thead>
            <tr className="header-kpi">
              <th>STT</th>
              <th>Nhiệm vụ</th>
              <th>DVT</th>
              <th>Mức trần KPI</th>
              <th>MBF Tỉnh/ GĐ MBF Tỉnh </th>
              <th>MBF huyện</th>
              <th>Tổ DVVT</th>
              <th>P.DVVT</th>
              <th>PGĐ MBF Tỉnh</th>
              <th>Tổ CNS</th>
              <th>TT.CNS</th>
              <th>Tổ CSKH</th>
              <th>P.CSKH</th>
              <th>Đắk Lắk</th>
              <th>Đắk Nông</th>
              <th>Gia Lai</th>
              <th>Khánh Hòa</th>
              <th>Kon Tum</th>
              <th>Phú Yên</th>
              <th>P.DVVT</th>
              <th>TT.CNS</th>
              <th>P.CSKH</th>
              <th>Phòng phụ trách</th>
              <th>Nguồn dữ liệu</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2}> I.Viễn cảnh tài chính </td>
              <td className="sticky-two-column"></td>
              <td></td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td rowSpan={3}>1</td>
              <td rowSpan={3}>Doanh thu TKC Hạ tầng số</td>
              <td>cell 3</td>
              <td>cell 4</td>
              <td>cell 5</td>
              <td>cell 6</td>
              <td>cell 7</td>
              <td>cell 8</td>
              <td>cell 9</td>
              <td>cell 10</td>
              <td>cell 11</td>
              <td>cell 12</td>
              <td>cell 13</td>
              <td>cell 14</td>
              <td>cell 15</td>
              <td>cell 16</td>
              <td>cell 17</td>
              <td>cell 18</td>
              <td>cell 19</td>
            </tr>
            <tr>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>11:40 </td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>11:40 </td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>11:40 </td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>11:40 </td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>11:40 </td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>11:40 </td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>11:40 </td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>11:40 </td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
            <tr>
              <td>11:40 </td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Maria Anders</td>
              <td>Germany</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Alfreds Futterkiste</td>
              <td>Maria Anders</td>
              <td>Germany</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
