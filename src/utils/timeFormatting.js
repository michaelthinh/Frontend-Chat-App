export function formatTime(timestamp) {
    const date = new Date(timestamp);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    return `${day}/${month}`;
}

export function getLastMessage(chatHistory) {
    const lastMessage = chatHistory[chatHistory.length - 1];
    return {
        lastMessage: lastMessage.message,
        lastMessageTime: formatTime(lastMessage.timestamp),
    };
}

export function formatTimeSent(timestamp) {
    const date = new Date(timestamp);
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
}
