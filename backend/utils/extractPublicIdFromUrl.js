export const getPublicIdFromUrl = (url) => {
    const regex = /\/v\d+\/(.+)\.[a-zA-Z]+$/;
    const match = url.match(regex);
    return match ? match[1] : null;
};

export default getPublicIdFromUrl;
