/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const DashboardPage = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [initTop, setInitTop] = useState(92);
  const [isSticky, setIsSticky] = useState(false);

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
      <h4 className="title mb-5">Dashboard KPI</h4>

      <div className={`table-responsive ${isSticky ? "isSticky" : ""} `}>
        <table className="table table-row-dashed table-striped  table-row-gray-300 align-middle gs-0 gy-3 sticky-thc">
          <thead>
            <tr>
              <th>TIME</th>
              <th>Company</th>
              <th>Company</th>
              <th>Company</th>
              <th>Company</th>
              <th>Company</th>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
              <th>Company</th>
              <th>Company</th>
              <th>Contact</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowSpan={2}> cell 1 </td>
              <td>cell 2</td>
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
              <td> cell 1 </td>
              <td>cell 2</td>
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
