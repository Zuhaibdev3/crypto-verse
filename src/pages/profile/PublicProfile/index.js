import React, { useEffect, useState } from 'react'
import "./index.css";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { ProfileIcon, Copy3, Ethereum, Help } from "../../../asset/svg";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { useAuth } from '../../../hooks/useAuth';
import { formatToken } from "../../../utils/TokenFormater";
import { useNft, } from '../../../hooks/useNft';

const PublicProfile = () => {
    const { store: { allNft, }, GetAll } = useNft()
    const { store: { user, } } = useAuth()
    const [Mode, setMode] = useState("Generated")
    const [nfts, setNfts] = useState([])

    useEffect(() => {
        GetAll()
    }, [])

    useEffect(() => {
        if (!allNft?.length) return
        setNfts(allNft)
    }, [allNft])

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
                        <Button variant="contained" className={Mode === "Generated" ? "page-type--list-selected-btn" : "page-type-list-btn"} disableRipple={true} onClick={() => setMode("Generated")}>Generated ({nfts?.length})</Button>
                        <Button variant="contained" className={Mode === "Minted" ? "page-type--list-selected-btn" : "page-type-list-btn"} disableRipple={true} onClick={() => setMode("Minted")}>Minted (0)</Button>
                        <Button variant="contained" className={Mode === "Favorites" ? "page-type--list-selected-btn" : "page-type-list-btn"} disableRipple={true} onClick={() => setMode("Favorites")}>Favorites (0)</Button>
                    </div>
                </div>
            </div>
            {allNft?.length ?
                <p className="profile-total-item-counter">{allNft?.length} Items</p>
                : null}
            <Grid container spacing={3}>
                {nfts?.length ? allNft?.map((el, index) => {
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
                                        <img src={el?.url} />
                                        <Button
                                            variant="contained"
                                            disableRipple={true}
                                            className="profile-card-fav-btn"
                                        >
                                            {/* {val.isSelected ? (
                                                <FavoriteIcon />
                                            ) : ( */}
                                            <FavoriteBorderOutlinedIcon />
                                            {/* )} */}
                                        </Button>
                                    </div>
                                    <div className="profile-card-inner">
                                        <p className="profile-card-title">Single Item</p>
                                        <p className="profile-card-text">{el?.prompt}</p>
                                        <div className="profile-card-footer">
                                            <div>
                                                <FavoriteBorderOutlinedIcon
                                                    style={{ color: "#FEFEFE" }}
                                                />
                                                <p>{el?.likes}</p>
                                                <RemoveRedEyeOutlinedIcon
                                                    style={{ color: "#FEFEFE" }}
                                                />
                                                <p>{el?.views}</p>
                                            </div>
                                            <Button
                                                variant="contained"
                                                disableRipple={true}
                                                className="profile-not-mined-btn"
                                            >
                                                <div>{el?.status}</div>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        </>
                    )
                }) : null}
            </Grid>
        </div>
    )
}

export default PublicProfile