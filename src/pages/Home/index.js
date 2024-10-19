import React, { useState } from "react";
// import { Footer, SelectDropdown, AnimatedNumbersCounter, AccordionCustom, Model, RangeSlider, } from "../../component";
import { HeaderImage, WhatWeOffer, NftgenerationImage, StyleImage, LogoPng, } from "../../asset/images";
import "./index.css";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Setting, Help, Copy, SelectedIcon, Gallery, Gallery2, Gallery3, Help2, Solana, Copy2, Document, } from "../../asset/svg";
import { Link, useNavigate } from "react-router-dom";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import CheckIcon from "@mui/icons-material/Check";
import { useDalle } from "../../hooks/useDalle";
import { CardList, FeaturesList, ImageArtVersion, ImageAspectRatio, ImageQuantity, QuestionList, StyleList, UpscaleList } from "../../constants/HomePageStatics";
import UploadImageForGenerationModal from "../../component/modals/UploadImageForGenerationModal";
import SelectDropdown from "../../component/SelectDropdown";
import AnimatedNumbersCounter from "../../component/AnimatedNumbersCounter";
import AccordionCustom from "../../component/AccordionCustom";
import Model from "../../component/model";

const Home = () => {
  const navigate = useNavigate();
  const [styleModal, setStyleModal] = useState(false);
  const [selectdStyle, setSelectedStyle] = useState("None");
  const [advancedOptionModal, setAdvancedOptionModal] = useState(false);
  const [imageAspectRatioSelected, setImageAspectRatioSelected] = useState("AR  1:1");
  const [upscaleSelected, setUpscaleSelected] = useState("Original (1024x1024)");
  const [uploadImageModal, setUploadImageModal] = useState(false);
  const { store: { image, status }, generateImage } = useDalle()

  const [ImageGenerationForm, setImageGenerationForm] = useState({
    prompt: ""
  })

  const HandleImageGenerateSubmit = async () => {
    const body = {
      prompt: ImageGenerationForm?.prompt
    }
    await generateImage(body)
  }


  return (
    <div className="home-container">
      <div className="home-header">
        <img src={HeaderImage} />
        <div>
          <div>
            <p className="home-header-title">WELCOME TO</p>
            <p className="home-header-title-2">CRYPTOVERSE AI</p>
          </div>
        </div>
      </div>
      <Grid container spacing={0}>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
        <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
          <div className="home-prompt">
            <div>
              <input name="prompt" value={ImageGenerationForm?.prompt} placeholder="Example Prompt" onChange={(e) => setImageGenerationForm({ ...ImageGenerationForm, [e?.target.name]: e.target.value })} />
              <Button
                variant="contained"
                className="home-generate-now-btn"
                disableRipple={true}
                onClick={() => HandleImageGenerateSubmit()}
              >
                {status === "pending" ? "Generating..." : "Generate Now"}
              </Button>
            </div>
          </div>

          <div className="home-dropdown-main">
            <div>
              <SelectDropdown data={ImageQuantity} />
              <Button
                variant="contained"
                className="home-modal-btn"
                disableRipple={true}
              >
                Model
                <img src={Help} />
              </Button>
              <SelectDropdown data={ImageArtVersion} />
              <div className="dropdown">
                <Button
                  variant="text"
                  disableRipple={true}
                  className="dropdown-btn"
                  onClick={() => setStyleModal(true)}
                >
                  <div>
                    <p>Add Styles</p>
                    <ArrowDropDownIcon
                      style={{ color: "#FEFEFE", marginLeft: "10px" }}
                    />
                  </div>
                </Button>
              </div>
              <Button
                variant="contained"
                className="home-generate-by-image-btn"
                disableRipple={true}
                onClick={() => setUploadImageModal(true)}
              >
                <div>
                  <p>+ Generate by image</p>
                </div>
              </Button>
            </div>
            <Button
              className="home-advanced-btn"
              disableRipple={true}
              onClick={() => setAdvancedOptionModal(true)}
            >
              <div>
                <img src={Setting} />
                <p>Advanced</p>
              </div>
            </Button>
          </div>
          <p className="get-inspired-title">GET INSPIRED</p>
          <p className="get-inspired-heading">Prompt Examples</p>
          <div className="home-card-container">
            <Grid container spacing={3}>
              {CardList.map((val, index) => {
                return (
                  <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
                    <div className="home-card">
                      <img src={val.image} />
                      <div>
                        <p>{val.title}</p>
                        <Link to="" className="copy-btn">
                          Copy
                          <img src={Copy} />
                        </Link>
                      </div>
                      <p>{val.text}</p>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
          </div>
          <div className="what-we-offer-main">
            <Grid container spacing={7}>
              <Grid item xs={12} sm={12} md={12} lg={5.5} xl={5.5}>
                <p className="what-we-offer-title">WHAT WE OFFER</p>
                <p className="what-we-offer-heading">
                  Advanced AI
                  <br />
                  NFT Creator,
                </p>
                <p className="what-we-offer-text">
                  Cryptoverse AI NFT Generator allows you to create and mint
                  unique NFT artwork collections in a simple and quick process.
                </p>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={6.5} xl={6.5}>
                <img src={WhatWeOffer} className="what-we-offer-image" />
              </Grid>
            </Grid>
          </div>
          <div className="what-we-offer-main">
            <Grid container spacing={7}>
              <Grid item xs={12} sm={12} md={12} lg={6.5} xl={6.5}>
                <img src={NftgenerationImage} className="what-we-offer-image" />
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={5.5} xl={5.5}>
                <p className="what-we-offer-heading">
                  for High- Fidelity NFT
                  <br />
                  Generation.
                </p>
                <p className="what-we-offer-text">
                  The generator is a user-friendly tool intended to automate the
                  whole process of generating and minting NFTs, thus reducing
                  the risk of making collection errors that usually occur in the
                  manual creation of NFTs, and you have complete control over
                  the NFT art digital assets you create.
                </p>
              </Grid>
            </Grid>
          </div>
          <div className="features-main">
            <p className="what-we-offer-title">features</p>
            <p className="what-we-offer-heading">
              Unleash
              <br />
              Your Creativity
            </p>
            <div className="features-list">
              <Grid container spacing={7}>
                {FeaturesList.map((val, index) => {
                  return (
                    <Grid item key={index} xs={12} sm={12} md={6} lg={6} xl={6}>
                      <div className="features-list-counter">
                        <p>0{index + 1}</p>
                      </div>
                      <p className="features-list-heading">
                        {val.heading}
                        <br />
                        {val.heading2}
                      </p>
                      <p className="features-list-text">{val.text}</p>
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </div>
          <div className="counter-box">
            <AnimatedNumbersCounter
              counter={15}
              title="Art Generated"
              sign="M"
            />
            <AnimatedNumbersCounter counter={3} title="Users" sign="K" />
            <AnimatedNumbersCounter counter={19.2} title="Prompts" sign="K" />
            <AnimatedNumbersCounter
              counter={280}
              title="Testimonial Posotive"
              sign="+"
            />
            <AnimatedNumbersCounter counter={4.8} title="Rating Work" sign="" />
          </div>
          <div className="question-main" id="faq">
            <Grid container spacing={7}>
              <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                <p className="what-we-offer-title">Have a Question?</p>
                <p className="what-we-offer-heading">
                  Frequently
                  <br />
                  Asked
                  <br />
                  Questions
                </p>
              </Grid>
              <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                {QuestionList.map((val, index) => {
                  return (
                    <AccordionCustom
                      key={index}
                      heading={val.heading}
                      index={index}
                    />
                  );
                })}
              </Grid>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
      </Grid>
      <Model
        open={styleModal}
        onClose={() => setStyleModal(false)}
        maxWidth="sm"
        title="Select a Style"
      >
        <Grid container spacing={2}>
          <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
            <Button
              variant="contained"
              className="home-style-modal-btn"
              disableRipple={true}
              onClick={() => {
                setSelectedStyle("None");
                setStyleModal(false);
              }}
            >
              <div>
                {selectdStyle === "None" && (
                  <img src={SelectedIcon} className="selected-icon" />
                )}
                <DoNotDisturbAltIcon style={{ marginBottom: "5px" }} />
                <p>None</p>
              </div>
            </Button>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
            <Button
              variant="contained"
              className="home-style-modal-btn"
              disableRipple={true}
              onClick={() => {
                setSelectedStyle("Enhance HDR");
                setStyleModal(false);
              }}
            >
              <div>
                {selectdStyle === "Enhance HDR" && (
                  <img src={SelectedIcon} className="selected-icon" />
                )}
                <p>
                  Enhance
                  <br />
                  HDR
                </p>
              </div>
            </Button>
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={4} xl={4}>
            <Button
              variant="contained"
              className="home-style-modal-btn"
              disableRipple={true}
              onClick={() => {
                setSelectedStyle("Detailed Texture");
                setStyleModal(false);
              }}
            >
              <div>
                {selectdStyle === "Detailed Texture" && (
                  <img src={SelectedIcon} className="selected-icon" />
                )}
                <p>
                  Detailed
                  <br />
                  Texture
                </p>
              </div>
            </Button>
          </Grid>
          {StyleList.map((val, index) => {
            return (
              <Grid item key={index} xs={6} sm={4} md={4} lg={4} xl={4}>
                <Button
                  variant="contained"
                  className="home-style-modal-btn-2"
                  disableRipple={true}
                  onClick={() => {
                    setSelectedStyle(val);
                    setStyleModal(false);
                  }}
                >
                  <div>
                    {selectdStyle === val && (
                      <img src={SelectedIcon} className="selected-icon" />
                    )}
                    <img src={StyleImage} className="style-modal-image" />
                    <p>{val}</p>
                  </div>
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Model>
      <Model
        open={advancedOptionModal}
        onClose={() => setAdvancedOptionModal(false)}
        maxWidth="xs"
        title="Advanced Option"
      >
        <p className="home-adv-option-modal-title">Image Aspect Ratio</p>
        <div className="home-image-aspect-ratio-main">
          {ImageAspectRatio.map((val, index) => {
            return (
              <Button
                variant="contained"
                className="home-image-aspect-ratio-btn"
                key={index}
                disableRipple={true}
                onClick={() => setImageAspectRatioSelected(val)}
              >
                <div
                  style={{
                    backgroundColor:
                      imageAspectRatioSelected === val
                        ? "#09090e"
                        : "transparent",
                  }}
                >
                  {imageAspectRatioSelected === val && (
                    <CheckIcon style={{ marginRight: "5px", height: "20px" }} />
                  )}
                  {val}
                </div>
              </Button>
            );
          })}
        </div>
        <div className="home-image-aspect-image-main">
          <div>
            <img src={Gallery} />
            <p className="home-image-aspect-image-title">1024x1024px</p>
          </div>
          <div>
            <img src={Gallery2} />
            <p className="home-image-aspect-image-title">832x1248px</p>
          </div>
          <div>
            <img src={Gallery3} />
            <p className="home-image-aspect-image-title">1024x1024px</p>
          </div>
        </div>
        <div className="home-modal-line" />
        <p className="home-adv-option-modal-title">Upscale</p>
        <div className="home-image-aspect-ratio-main">
          {UpscaleList.map((val, index) => {
            return (
              <Button
                variant="contained"
                className="home-image-aspect-btn"
                key={index}
                disableRipple={true}
                onClick={() => setUpscaleSelected(val)}
              >
                <div
                  style={{
                    backgroundColor:
                      upscaleSelected === val ? "#09090e" : "transparent",
                  }}
                >
                  {upscaleSelected === val && (
                    <CheckIcon style={{ marginRight: "5px", height: "20px" }} />
                  )}
                  {val}
                </div>
              </Button>
            );
          })}
        </div>
        <div className="home-modal-line" />
        <div className="home-adv-option-modal-section">
          <p className="home-adv-option-modal-title">Upscale</p>
          <Link className="home-adv-option-modal-section-btn">
            <img src={Help2} />
            Learn More
          </Link>
        </div>
        <div className="home-adv-option-modal-input">
          <p>-no</p>
          <input placeholder="enter your prompt here" />
        </div>
        <div className="home-adv-option-modal-section">
          <p className="home-adv-option-modal-title">Upscale</p>
          <Link className="home-adv-option-modal-section-btn">
            <img src={Help2} />
            Learn More
          </Link>
        </div>
        <div className="home-adv-option-modal-section">
          <Button
            variant="contained"
            className="home-add-traits-btn"
            disableRipple={true}
          >
            <div>+ add traits</div>
          </Button>
          <Button
            variant="contained"
            className="home-adv-option-done-btn"
            disableRipple={true}
          >
            Done
          </Button>
        </div>
        <div className="home-modal-line" />
      </Model>
      <UploadImageForGenerationModal
        setUploadImageModal={setUploadImageModal}
        uploadImageModal={uploadImageModal}
      />
    </div>
  );
};
export default Home;
