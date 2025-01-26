import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ImageToImageGenerateAction } from '../store/apps/stabilityAi';
import { GetAllAction, getOneAction, handleNftLikeReaction, updateAction } from '../store/apps/nft';

export const useNft = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const store = useSelector((state) => state.nft);

    const GetAll = (body) => {
        dispatch(GetAllAction(body))
    }

    const getOne = (body) => {
        dispatch(getOneAction(body))
    }

    const handleNftLike = async(body) => {
       return dispatch(handleNftLikeReaction(body))
    }

    const updateNft = async(body) => {
        console.log(body , "body hook")
       return dispatch(updateAction(body))
    }

    return {
        store,
        GetAll,
        getOne,
        handleNftLike,
        updateNft
    };
};
