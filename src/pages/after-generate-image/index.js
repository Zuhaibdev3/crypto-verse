import React, { useState } from "react";
import AfterGenerateImageNavbar from "../../component/after-genderate-image-navbar";
import "./index.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import {
  AfterGenerateImageCard1,
  AfterGenerateImageCard2,
  AfterGenerateImageCard3,
  AfterGenerateImageCard4,
  AfterGenerateImageCard5,
} from "../../asset/images";
import { useDalle } from "../../hooks/useDalle";
const AfterGenerateImage = () => {
  const navigate = useNavigate();
  const { store: { generatedImages, status }, } = useDalle()

  const [list, setList] = useState([
    {
      img: AfterGenerateImageCard1,
      isSelected: false,
      title: "ArtCrypto",
      text: "Cyber Kangaroo In space, sci-fi style, purple colors",
    },
    {
      img: AfterGenerateImageCard2,
      isSelected: false,
      title: "ArtCrypto",
      text: "Cyber Kangaroo In space, sci-fi style, purple colors",
    },
    {
      img: AfterGenerateImageCard3,
      isSelected: false,
      title: "ArtCrypto",
      text: "Cyber Kangaroo In space, sci-fi style, purple colors",
    },
    {
      img: AfterGenerateImageCard4,
      isSelected: false,
      title: "ArtCrypto",
      text: "Cyber Kangaroo In space, sci-fi style, purple colors",
    },
    {
      img: AfterGenerateImageCard5,
      isSelected: false,
      title: "ArtCrypto",
      text: "Cyber Kangaroo In space, sci-fi style, purple colors",
    },
  ]);
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
        {status === "pending" ? <div style={{ justifyContent: "center", display: "flex", alignItems: "center", color:"white", fontSize:"50px"}}>Loading...</div> :
          <Grid container spacing={3}>
            {generatedImages?.nft?.length ? generatedImages?.nft?.map((el, index) => {
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
                      // onClick={() => {
                      //   list[index].isSelected = !list[index].isSelected;
                      //   setList([...list]);
                      // }}
                      >
                        <div
                        // style={{
                        //   borderColor: val.isSelected
                        //     ? "transparent"
                        //     : "#D9D9D933",
                        //   background: val.isSelected
                        //     ? "linear-gradient(to right, #ff7357, #ff2957)"
                        //     : "transparent",
                        // }}
                        >
                          {/* {val.isSelected && (
                        <CheckIcon
                          style={{ height: "15px", width: "15px" }}
                        />
                      )} */}
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
                    <p>{generatedImages?.prompt}</p>
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
