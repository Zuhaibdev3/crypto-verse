import instance from './http.service';

const NftServices = {
    GetAll: () => {
        return instance.get('/nft');
    },
    getOne: ({ id }) => {
        return instance.get(`/nft/${id}`);
    },
    handleLikeReaction: (id, data) => {
        return instance.put(`/nft/like/${id}`, data);
    },
    update: (id, data) => {
        return instance.put(`/nft/${id}`, data);
    },
};
export default NftServices;
