import React, { useState } from "react";
import "./index.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { LogoPng } from "../../asset/images";
import { useNavigate, Link } from "react-router-dom";
import { Wallet2 } from "../../asset/svg";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const AfterGenerateImageNavbar = ({ exploreHide }) => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const List = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Features",
      path: "",
    },
    {
      title: "How It Works",
      path: "",
    },
    {
      title: "Tokens",
      path: "",
    },
    {
      title: "FAQ",
      path: "",
    },
  ];
  return (
    <div className="after-generate-image-navbar-container">
      {!isMatch ? (
        <div className="after-generate-image-navbar-container-inner">
          <Button
            variant="contained"
            className="after-g-i-n-back-btn"
            disableRipple={true}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIcon />
            <div />
            <img src={LogoPng} />
          </Button>
          <div className="after-g-i-n-middle">
            <div>
              <Link
                className="after-g-i-n-page-title-main"
                style={{ flexDirection: "column" }}
              >
                <p className="after-g-i-n-page-active">Generate</p>
                <div className="after-g-i-n-page-active-line" />
              </Link>
            </div>
            {!exploreHide && (
              <div>
                <Link className="after-g-i-n-page-title-main">
                  <p className="after-g-i-n-page-title">Explore</p>
                  <ArrowDropDownIcon style={{ color: "#FEFEFE" }} />
                </Link>
                <div className="after-g-i-n-page-line" />
              </div>
            )}
            <div>
              <Link className="after-g-i-n-page-title-main">
                <p className="after-g-i-n-page-title" onClick={()=>navigate("/profile")}>My NFT</p>
                <ArrowDropDownIcon style={{ color: "#FEFEFE" }} />
              </Link>
              <div className="after-g-i-n-page-line" />
            </div>
            <div>
              <Link className="after-g-i-n-page-title-main">
                <p className="after-g-i-n-page-title">Template</p>
                <ArrowDropDownIcon style={{ color: "#FEFEFE" }} />
              </Link>
              <div className="after-g-i-n-page-line" />
            </div>
          </div>
          <Button
            variant="contained"
            className="after-g-i-n-wallet-btn"
            disableRipple={true}
          >
            <img src={Wallet2} />
            0x05avc....aswa12
          </Button>
        </div>
      ) : (
        <div className="after-generate-image-navbar-container-inner">
          <Button
            variant="contained"
            className="after-g-i-n-back-btn"
            disableRipple={true}
            onClick={() => navigate(-1)}
          >
            <ArrowBackIcon />
            <div />
            <img src={LogoPng} />
          </Button>
          <IconButton
            onClick={() => {
              setIsDrawerOpen(true);
            }}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </div>
      )}
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerClose}>
        <div>
          <div className="sider-content-wraper">
            <div className="drawer-header-main">
              <IconButton
                onClick={() => {
                  handleDrawerClose();
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
            <ul className="side-menu-ul">
              <li>
                <Link
                  className="after-g-i-n-page-title-main"
                  style={{ flexDirection: "column" }}
                  onClick={() => {
                    setIsDrawerOpen(false);
                  }}
                >
                  <p className="after-g-i-n-page-active">Generate</p>
                  <div className="after-g-i-n-page-active-line" />
                </Link>
              </li>
              {!exploreHide && (
                <li>
                  <div className="after-g-i-n-drawer-title">
                    <Link
                      className="after-g-i-n-page-title-main"
                      onClick={() => {
                        setIsDrawerOpen(false);
                      }}
                    >
                      <p
                        className="after-g-i-n-page-title"
                        style={{ color: "#2d151a" }}
                      >
                        Explore
                      </p>
                      <ArrowDropDownIcon style={{ color: "#2d151a" }} />
                    </Link>
                    <div className="after-g-i-n-page-line" />
                  </div>
                </li>
              )}
              <li>
                <div className="after-g-i-n-drawer-title">
                  <Link
                    className="after-g-i-n-page-title-main"
                    onClick={() => {
                      setIsDrawerOpen(false);
                    }}
                  >
                    <p
                      className="after-g-i-n-page-title"
                      style={{ color: "#2d151a" }}
                    >
                      My NFT
                    </p>
                    <ArrowDropDownIcon style={{ color: "#2d151a" }} />
                  </Link>
                  <div className="after-g-i-n-page-line" />
                </div>
              </li>
              <li>
                <div className="after-g-i-n-drawer-title">
                  <Link
                    className="after-g-i-n-page-title-main"
                    onClick={() => {
                      setIsDrawerOpen(false);
                    }}
                  >
                    <p
                      className="after-g-i-n-page-title"
                      style={{ color: "#2d151a" }}
                    >
                      Template
                    </p>
                    <ArrowDropDownIcon style={{ color: "#2d151a" }} />
                  </Link>
                  <div className="after-g-i-n-page-line" />
                </div>
              </li>
              <br />
            </ul>
            <div style={{ margin: "15px" }}>
              <Button
                variant="contained"
                className="after-g-i-n-wallet-btn"
                disableRipple={true}
              >
                <img src={Wallet2} />
                0x05avc....aswa12
              </Button>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
export default AfterGenerateImageNavbar;
