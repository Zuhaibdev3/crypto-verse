import React, { Suspense, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import ConnectToWalletModal from '../component/modals/ConnectToWalletModal';
import { Grid } from '@mui/material';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { useDispatch } from 'react-redux';
import { verifyAction } from '../store/apps/auth';

const AppLayout = () => {
    const dispatch = useDispatch()
    const [connetWalletModal, setConnectWalletModal] = useState(false);
    const [connectLoading, setConnectLoading] = useState(false);
    const [connectLoadingDone, setConnectLoadingDone] = useState(false);

    useEffect(() => {
        dispatch(verifyAction(dispatch));
    }, []);

    return (
        <>
            <Header onClick={() => setConnectWalletModal(true)} />

            <Suspense fallback={<>Loading</>}>
                <Outlet></Outlet>
            </Suspense>
            <Grid container spacing={0}>
                <Grid item xs={1} sm={1} md={1} lg={1} xl={1} />
                <Grid item xs={10} sm={10} md={10} lg={10} xl={10}>
                    <Footer />
                </Grid>
            </Grid>

            <ConnectToWalletModal
                connetWalletModal={connetWalletModal}
                connectLoading={connectLoading}
                connectLoadingDone={connectLoadingDone}
                setConnectLoading={setConnectLoading}
                setConnectLoadingDone={setConnectLoadingDone}
                setConnectWalletModal={setConnectWalletModal}
            />
        </>
    )
}

export default AppLayout