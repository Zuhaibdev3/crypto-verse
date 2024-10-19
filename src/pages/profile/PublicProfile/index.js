import React, { useEffect, useState } from 'react'
import "./index.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ProfileIcon, Copy3, Ethereum, Help } from "../../../asset/svg";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { AfterGenerateImageCard3, AfterGenerateImageCard5, } from "../../../asset/images";
import { useDalle } from '../../../hooks/useDalle';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import { formatToken } from "../../../utils/TokenFormater";

const PublicProfile = () => {
    const { store: { AllNFTs, }, getAllNFT } = useDalle()
    const { store: { user, } } = useAuth()
    const [Mode, setMode] = useState("Generated")

    useEffect(() => {
        getAllNFT()
    }, [])
    return (
        <div>
            <div className="profile-user-section-main">
                <img src={user?.profilePicUrl} className="profile-user-section-icon" />
                <p>{formatToken(user?.walletAddress)}</p>
                <img src={Copy3} className="profile-user-section-copy" />
            </div>
            <div className="profile-type-list-main">
                <div>
                    <div>
                        <Button variant="contained" className={Mode === "Generated" ? "page-type--list-selected-btn" : "page-type-list-btn"} disableRipple={true} onClick={() => setMode("Generated")}>Generated</Button>
                        <Button variant="contained" className={Mode === "Minted" ? "page-type--list-selected-btn" : "page-type-list-btn"} disableRipple={true} onClick={() => setMode("Minted")}>Minted</Button>
                        <Button variant="contained" className={Mode === "Favorites" ? "page-type--list-selected-btn" : "page-type-list-btn"} disableRipple={true} onClick={() => setMode("Favorites")}>Favorites</Button>
                    </div>
                </div>
            </div>
            {AllNFTs?.nft?.length ?
                <p className="profile-total-item-counter">{AllNFTs?.nft?.length} Items</p>
                : null}
            <Grid container spacing={3}>
                {AllNFTs?.length ? AllNFTs?.map((el) => {
                    return (
                        <>
                            {el?.nft?.map((nft, index) => {
                                return (
                                    <>
                                        <Grid
                                            item
                                            key={index}
                                            xs={12}
                                            sm={12 / 2}
                                            md={12 / 3}
                                            lg={12 / 4}
                                            xl={12 / 5}
                                        >
                                            <div className="profile-card">
                                                <div className="profile-card-img">
                                                    <img src={nft?.url} />
                                                    {/* <Button
                                        variant="contained"
                                        disableRipple={true}
                                        className="profile-card-fav-btn"
                                        onClick={() => {
                                            list[index].isSelected = !list[index].isSelected;
                                            setList([...list]);
                                        }}
                                    >
                                        {val.isSelected ? (
                                            <FavoriteIcon />
                                        ) : (
                                            <FavoriteBorderOutlinedIcon />
                                        )}
                                    </Button> */}
                                                </div>
                                                <div className="profile-card-inner">
                                                    <p className="profile-card-title">Single Item</p>
                                                    <p className="profile-card-text">{el?.prompt}</p>
                                                    <div className="profile-card-footer">
                                                        <div>
                                                            <FavoriteBorderOutlinedIcon
                                                                style={{ color: "#FEFEFE" }}
                                                            />
                                                            <p>2</p>
                                                            <RemoveRedEyeOutlinedIcon
                                                                style={{ color: "#FEFEFE" }}
                                                            />
                                                            <p>6</p>
                                                        </div>
                                                        <Button
                                                            variant="contained"
                                                            disableRipple={true}
                                                            className="profile-not-mined-btn"
                                                        >
                                                            <div>Not Minted</div>
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Grid>
                                    </>
                                )
                            })}
                        </>
                    )

                }) : null}
                {AllNFTs?.nft?.length ? AllNFTs?.nft?.map((el, index) => {
                    console.log(el, "el")
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
                            <div className="profile-card">
                                <div className="profile-card-img">
                                    {/* <img src={val?.url} /> */}
                                    {/* <Button
                                        variant="contained"
                                        disableRipple={true}
                                        className="profile-card-fav-btn"
                                        onClick={() => {
                                            list[index].isSelected = !list[index].isSelected;
                                            setList([...list]);
                                        }}
                                    >
                                        {val.isSelected ? (
                                            <FavoriteIcon />
                                        ) : (
                                            <FavoriteBorderOutlinedIcon />
                                        )}
                                    </Button> */}
                                </div>
                                <div className="profile-card-inner">
                                    <p className="profile-card-title">Single Item</p>
                                    <p className="profile-card-text">{AllNFTs?.prompt}</p>
                                    <div className="profile-card-footer">
                                        <div>
                                            <FavoriteBorderOutlinedIcon
                                                style={{ color: "#FEFEFE" }}
                                            />
                                            <p>2</p>
                                            <RemoveRedEyeOutlinedIcon
                                                style={{ color: "#FEFEFE" }}
                                            />
                                            <p>6</p>
                                        </div>
                                        <Button
                                            variant="contained"
                                            disableRipple={true}
                                            className="profile-not-mined-btn"
                                        >
                                            <div>Not Minted</div>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    );
                }) : null}
            </Grid>
        </div>
    )
}

export default PublicProfile