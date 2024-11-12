import React, { useState } from "react";
import AfterGenerateImageNavbar from "../../component/after-genderate-image-navbar";
import "./index.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import { useStabilityAi } from "../../hooks/useStabilityAi";
const AfterGenerateImage = () => {
  const navigate = useNavigate();
  const { store: { nfts, status }, } = useStabilityAi()

  return (
    <div className="after-generate-mage-container">
      <AfterGenerateImageNavbar />
      <div className="after-generate-mage-container-inner">
        <div className="a-g-i-p-header">
          <p>Mint Your NFT</p>
          <div>
            <p>Select multiple images to mint</p>
            <Button
              variant="contained"
              className="a-g-i-p-header-btn"
              disableRipple={true}
              onClick={() => navigate("/profile")}
            >
              <div>Mint NFT’s</div>
            </Button>
          </div>
        </div>
        {status === "pending" ? <div style={{ justifyContent: "center", display: "flex", alignItems: "center", color: "white", fontSize: "50px" }}>Loading...</div> :
          <Grid container spacing={3}>
            {nfts?.length ? nfts?.map((el, index) => {
              return (
                <Grid
                  item
                  key={index}
                  xs={12}
                  sm={12 / 2}
                  md={12 / 3}
                  lg={12 / 4}
                  xl={12 / 5}
                >
                  <div className="a-g-i-p-card">
                    <img src={el?.url} />
                    <div>
                      <Button
                        variant="contained"
                        className="a-g-i-p-card-check-btn"
                        disableRipple={true}

                      >
                        <div style={{ borderColor: "#D9D9D933", background: "linear-gradient(to right, #ff7357, #ff2957)" }}>
                          {/* {val.isSelected && ( */}
                          <CheckIcon style={{ height: "15px", width: "15px" }} />
                          {/* )} */}
                        </div>
                        <p>{"ArtCrypto"}</p>
                      </Button>
                      <Button
                        variant="contained"
                        className="a-g-i-p-card-nft-btn"
                        disableRipple={true}
                        onClick={() => navigate("/profile")}
                      >
                        <div>Mint NFT</div>
                      </Button>
                    </div>
                    <p>{el?.prompt}</p>
                  </div>
                </Grid>
              );
            }) : null}
          </Grid>
        }

      </div>
      <br />
    </div>
  );
};
export default AfterGenerateImage;
