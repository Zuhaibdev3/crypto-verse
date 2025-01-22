import React, { useState } from "react";
import "./index.css";
import { Wallet } from "../../asset/svg";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import { useTheme } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import { useAuth } from "../../hooks/useAuth";
import { Wallet2 } from "../../asset/svg";
import { formatToken } from "../../utils/TokenFormater";
import { LogoPng, profilePlaceHolder } from "../../asset/images";

const Header = ({ onClick }) => {
  const navigate = useNavigate();
  const { store: { user, status } } = useAuth()
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const List = [
    {
      title: "Homezzzzz",
      path: "/",
    },
    {
      title: "Features",
      path: "",
    },


    // This link will be showed when user is login
    {
      title: "  MyNft",
      path: "myNft",
    },



    {
      title: "How It Works",
      path: "",
    },
    {
      title: "RoadMap",
      path: "/Roadmap",
    },
    {
      title: "Whitepaper",
      path: "/whitepaper",
    },
    {
      title: "FAQ",
      path: "#faq",
    },
  ];

  return (
    <div className="navbar-container">
      {isMatch ? (
        <div className="navbar-container-inner" id="navbar-container-inner">
          <img src={LogoPng} className="navbar-logo" />
          <IconButton
            onClick={() => {
              setIsDrawerOpen(true);
            }}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
        </div>
      ) : (
        <Grid container spacing={0}>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
          <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
            <div className="navbar-container-inner">
              <Link to="/">
                <img src={LogoPng} className="navbar-logo" />
              </Link>
              <div>
                {List.map((val, index) => {
                  if (!user?.walletAddress && val.path === "myNft") return
                  return (
                    <>
                      {val.title === "FAQ" ? (
                        <a href={val.path} className="navbar-link" key={index}>
                          {val.title}
                        </a>
                      ) : (
                        <Link to={val.path} className="navbar-link" key={index}>
                          {val.title}
                        </Link>
                      )}
                    </>
                  );
                })}
              </div>

              {user?.walletAddress ?
                // <Button
                //   variant="contained"
                //   className="after-g-i-n-wallet-btn"
                //   disableRipple={true}
                //   onClick={onClick}
                // >
                //   <img src={Wallet2} />
                //   {formatToken(user?.walletAddress)}
                // </Button>
                <Button
                  variant="contained"
                  className="after-g-i-n-wallet-btn"
                  disableRipple={true}
                  onClick={onClick}
                >
                  <img src={Wallet2} />
                  {formatToken(user?.walletAddress)}

                  <Link to="/profile" className="after-g-i-n-wallet-btn-profile-btn-link" >
                    <img src={profilePlaceHolder} className="after-g-i-n-wallet-btn-profile-btn" />
                  </Link>

                </Button>
                :
                <Button
                  variant="contained"
                  className="navbar-wallet-btn"
                  disableRipple={true}
                  onClick={onClick}
                >
                  <img src={Wallet} />
                  <p>{status === "pending" ? "Connecting..." : "Connect Wallet"}</p>
                </Button>
              }
            </div>
          </Grid>
          <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
        </Grid>
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
              {List.map((val, index) => {
                return (
                  <li key={index}>
                    {val.title === "FAQ" ? (
                      <a
                        href={val.path}
                        className={"side-menu-page"}
                        style={{ paddingLeft: "10px", textDecoration: "none" }}
                        onClick={() => {
                          setIsDrawerOpen(false);
                        }}
                      >
                        <span className="side-menu-page-title" >
                          {val.title}
                        </span>
                      </a>
                    ) : (
                      <Button
                        variant="text"
                        className={"side-menu-page"}
                        onClick={() => {
                          setIsDrawerOpen(false);
                          navigate(val.path);
                        }}
                      >
                        <span className="side-menu-page-title">
                          {val.title}
                        </span>
                      </Button>
                    )}
                  </li>
                );
              })}

              <br />
            </ul>
            <div style={{ margin: "15px" }}>
              <Button
                variant="contained"
                className="navbar-wallet-btn"
                disableRipple={true}
                onClick={() => {
                  setIsDrawerOpen(false);
                  onClick();
                }}
              >
                <img src={Wallet} />
                <p>Connect Wallet</p>
              </Button>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};
export default Header;
