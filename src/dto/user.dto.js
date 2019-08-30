export const userDTO = (data) => {
    const response = {
        ...data,
    };
    delete response.createdAt;
    delete response.updatedAt;
    delete response.password;
    delete response.__v;
    return response;
};
