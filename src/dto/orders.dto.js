export const orderDTO = (data) => {
    const response = {
        ...data,
    };
    delete response.createdAt;
    delete response.updatedAt;
    delete response.__v;
    return response;
};
