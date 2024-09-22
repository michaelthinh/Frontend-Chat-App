export const getLastSender = (chats) => {
    if (chats.length === 0) {
        return null;
    }
    return chats[chats.length - 1].sender;
};
