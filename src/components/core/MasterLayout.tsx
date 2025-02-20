import React, { useEffect } from "react";
import { IonIcon } from "@ionic/react";
import { Link, Outlet } from "react-router-dom";

import {
  homeOutline,
  menuOutline,
  todayOutline,
  warningOutline,
  analytics,
  logOutOutline,
} from "ionicons/icons";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../setup";

const MasterLayout: React.FC = ({ }) => {
  const user = useSelector<RootState>(
    ({ auth }) => auth.user,
    shallowEqual
  ) as string;
  useEffect(() => {
    if (document) {
      let list = document.querySelectorAll(".navigation li");
      list.forEach((object) => {
        object.addEventListener("click", () => {
          list.forEach((item) => {
            item.classList.remove("active");
            object.classList.add("active");
          });
        });
      });
    }
  }, []);
  useEffect(() => {
    const pathnames = window.location.pathname.split("/");
    console.log("pathnames", pathnames);
    let element;
    switch (pathnames[1]) {
      case "thay-sim-4g":
        element = document.getElementById("menu-thay-sim-4g");
        element?.classList.add("active");
        break;
      case "nhan-vien-nghi-viec":
        element = document.getElementById("menu-employee-off");
        element?.classList.add("active");
        break;
      case "dashboard":
        element = document.getElementById("menu-dashboard");
        element?.classList.add("active");
        break;

      case "warning-expire":
        element = document.getElementById("warning-expire");
        element?.classList.add("active");
        break;
      case "crawl-muasamcong":
        element = document.getElementById("menu-crawl-muasamcong");
        element?.classList.add("active");
        break;
      case "platform":
        element = document.getElementById("menu-platform");
        element?.classList.add("active");
        break;
      case "dashboard-business":
        element = document.getElementById("menu-dashboard-business");
        element?.classList.add("active");
        break;
      case "ptm":
        element = document.getElementById("menu-ptm");
        element?.classList.add("active");
        break;
      case "cs":
        element = document.getElementById("menu-cs");
        element?.classList.add("active");
        break;
      default:
        break;
    }
  }, []);
  const toggleOnClick = () => {
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");
    navigation?.classList.toggle("active");
    main?.classList.toggle("active");
  };
  const removeActiveNavigation = () => {
    let navigation = document.querySelector(".navigation");
    let main = document.querySelector(".main");
    navigation?.classList.add("active");
    main?.classList.add("active");
  };
  return (
    <div className="container-warper">
      <div className="navigation">
        <ul>
          <li className="title-sidebar">
            <h4>Báo cáo Sản Phẩm Dịch Vụ</h4>
          </li>
          <li id="menu-dashboard">
            <Link
              className="menu-link"
              to={`dashboard`}
              onClick={removeActiveNavigation}
            >
              <span className="icon">
                <IonIcon className="ion-icon" icon={todayOutline}></IonIcon>
              </span>
              <span className="title">DashBoard</span>
            </Link>
          </li>
          <li id="menu-dashboard-business">
            <Link
              className="menu-link"
              to={`dashboard-business`}
              onClick={removeActiveNavigation}
            >
              <span className="icon">
                <IonIcon className="ion-icon" icon={analytics}></IonIcon>
              </span>
              <span className="title">DashBoard Business</span>
            </Link>
          </li>
          <li id="warning-expire">
            <Link
              className="menu-link"
              to={`warning-expire`}
              onClick={removeActiveNavigation}
            >
              <span className="icon">
                <IonIcon className="ion-icon" icon={warningOutline}></IonIcon>
              </span>
              <span className="title">Warning Expire</span>
            </Link>
          </li>
          <li id="menu-crawl-muasamcong">
            <Link
              className="menu-link"
              to={`crawl-muasamcong`}
              onClick={removeActiveNavigation}
            >
              <span className="icon">
                <IonIcon className="ion-icon" icon={todayOutline}></IonIcon>
              </span>
              <span className="title">Crawl-MuaSamCong</span>
            </Link>
          </li>
          <li id="menu-platform">
            <Link
              className="menu-link"
              to={`platform`}
              onClick={removeActiveNavigation}
            >
              <span className="icon">
                <IonIcon className="ion-icon" icon={todayOutline}></IonIcon>
              </span>
              <span className="title">Platform</span>
            </Link>
          </li>
          <li>
            <Link className="menu-link" to={`/logout`}>
              <span className="icon">
                <IonIcon className="ion-icon" icon={logOutOutline}></IonIcon>
              </span>
              <span className="title">Sign out</span>
            </Link>
          </li>

          {/* <li id="menu-thay-sim-4g">
            <Link className="menu-link" to={`thay-sim-4g`}>
              <span className="icon">
                <IonIcon className="ion-icon" icon={pricetagOutline}></IonIcon>
              </span>
              <span className="title">Thay sim 4G</span>
            </Link>
          </li>

          <li id="menu-ptm">
            <Link className="menu-link" to={`ptm`}>
              <span className="icon">
                <IonIcon
                  className="ion-icon"
                  icon={trendingUpOutline}
                ></IonIcon>
              </span>
              <span className="title">Phát triển mới</span>
            </Link>
          </li>
          <li id="menu-cs">
            <Link className="menu-link" to={`cs`}>
              <span className="icon">
                <IonIcon className="ion-icon" icon={shuffleOutline}></IonIcon>
              </span>
              <span className="title">Duy trì</span>
            </Link>
          </li>
          <li id="menu-employee-off">
            <Link className="menu-link" to={`nhan-vien-nghi-viec`}>
              <span className="icon">
                <IonIcon className="ion-icon" icon={personOutline}></IonIcon>
              </span>
              <span className="title">Nhân viên nghỉ việc</span>
            </Link>
          </li>
          <li>
            <Link className="menu-link" to={`/`}>
              <span className="icon">
                <IonIcon className="ion-icon" icon={helpOutline}></IonIcon>
              </span>
              <span className="title">Help</span>
            </Link>
          </li>
          <li>
            <Link className="menu-link" to={`/`}>
              <span className="icon">
                <IonIcon className="ion-icon" icon={settingsOutline}></IonIcon>
              </span>
              <span className="title">Settings</span>
            </Link>
          </li>
          <li>
            <Link className="menu-link" to={`/`}>
              <span className="icon">
                <IonIcon
                  className="ion-icon"
                  icon={lockClosedOutline}
                ></IonIcon>
              </span>
              <span className="title">Password</span>
            </Link>
          </li>
          <li>
            <Link className="menu-link" to={`/`}>
              <span className="icon">
                <IonIcon className="ion-icon" icon={logOutOutline}></IonIcon>
              </span>
              <span className="title">Sign out</span>
            </Link>
          </li> */}
        </ul>
      </div>
      <div className="main">
        <div className="topbar">
          <div className="toggle" onClick={toggleOnClick}>
            <IonIcon className="ion-icon" icon={menuOutline}></IonIcon>
          </div>
          <a href="#">
            <span className="icon">
              <img src="/imgs/logo-header.png" alt="" />
            </span>
          </a>
          {/* <div className="search">
            <label htmlFor="">
              <input type="text" placeholder="Search Here" />
              <IonIcon className="ion-icon" icon={searchOutline}></IonIcon>
            </label>
          </div> */}
          {/* User IMG */}
          <div className="user">
            <p className="header-name pt-3 me-5">
              <span style={{ fontWeight: 500 }}>Xin chào </span>
              {user?.split("@")[0]}
            </p>
            <div className="user-header">
              <img src="/imgs/logo-mobifone.png" alt="user" />
            </div>
          </div>
        </div>
        <div className="content-page">
          <Outlet />
        </div>
        <div className="footer">
          <div className="title text-center">
            MOBIFONE - GIẢI PHÁP CHUYỂN ĐỔI SỐ
          </div>
          <div className="d-flex justify-content-center">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="100%"
                height="100%"
                viewBox="0 0 24 24"
                fill="rgba(5, 31, 77, 1)"
              >
                <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"></path>
              </svg>
            </div>
            <p className="address">
              Địa chỉ: Số 16 Trường Chinh, Phường Tân Lợi, TP Buôn Ma Thuột,
              Tỉnh Đắk Lắk
            </p>
          </div>

          <div className="horizontal-line"></div>
          <div className="end-text">©2022 Allrights reserved</div>
        </div>
      </div>
    </div>
  );
};

export default MasterLayout;
