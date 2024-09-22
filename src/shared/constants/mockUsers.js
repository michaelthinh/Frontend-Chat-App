import { getLastMessage } from "../../utils/timeFormatting";

export const mockUsers = [
    {
        id: 1,
        name: "John Doe",
        profilePic: "https://via.placeholder.com/50?text=JD",
        chats: [
            {
                sender: "John Doe",
                message: "Hey! How are you?",
                timestamp: 1695317400000,
            },
            {
                sender: "You",
                message: "I'm good, how about you?",
                timestamp: 1695318000000,
            },
            {
                sender: "John Doe",
                message: "Doing well, thanks!",
                timestamp: 1695318600000,
            },
        ],
        unreadMessages: 1,
    },
    {
        id: 2,
        name: "Jane Smith",
        profilePic: "https://via.placeholder.com/50?text=JS",
        chats: [
            {
                sender: "You",
                message: "Are you free tomorrow?",
                timestamp: 1695287400000,
            },
            {
                sender: "Jane Smith",
                message: "Yes, let's catch up!",
                timestamp: 1695288000000,
            },
            {
                sender: "Jane Smith",
                message: "See you later!",
                timestamp: 1695288600000,
            },
        ],
        unreadMessages: 2,
    },
    {
        id: 3,
        name: "Alice Johnson",
        profilePic: "https://via.placeholder.com/50?text=AJ",
        chats: [
            {
                sender: "Alice Johnson",
                message: "Can you send me the report?",
                timestamp: 1695257400000,
            },
            {
                sender: "You",
                message: "Sure, sending it over now.",
                timestamp: 1695258000000,
            },
        ],
        unreadMessages: 0,
    },
    {
        id: 4,
        name: "Michael Brown",
        profilePic: "https://via.placeholder.com/50?text=MB",
        chats: [
            {
                sender: "Michael Brown",
                message: "Let's meet tomorrow.",
                timestamp: 1695227400000,
            },
            {
                sender: "You",
                message: "Sounds good!",
                timestamp: 1695228000000,
            },
        ],
        unreadMessages: 0,
    },
    {
        id: 5,
        name: "Emma Davis",
        profilePic: "https://via.placeholder.com/50?text=ED",
        chats: [
            {
                sender: "Emma Davis",
                message: "I'll call you later.",
                timestamp: 1695197400000,
            },
            {
                sender: "You",
                message: "Ok, talk soon!",
                timestamp: 1695198000000,
            },
        ],
        unreadMessages: 0,
    },
    {
        id: 6,
        name: "Oliver Wilson",
        profilePic: "https://via.placeholder.com/50?text=OW",
        chats: [
            {
                sender: "You",
                message: "Can you confirm the details?",
                timestamp: 1695167400000,
            },
            {
                sender: "Oliver Wilson",
                message: "Got it, thanks!",
                timestamp: 1695168000000,
            },
        ],
        unreadMessages: 0,
    },
    {
        id: 7,
        name: "Sophia Martinez",
        profilePic: "https://via.placeholder.com/50?text=SM",
        chats: [
            {
                sender: "Sophia Martinez",
                message: "What time is the meeting?",
                timestamp: 1695137400000,
            },
            {
                sender: "You",
                message: "10 AM tomorrow.",
                timestamp: 1695138000000,
            },
        ],
        unreadMessages: 0,
    },
    {
        id: 8,
        name: "Liam Thompson",
        profilePic: "https://via.placeholder.com/50?text=LT",
        chats: [
            {
                sender: "Liam Thompson",
                message: "Good night!",
                timestamp: 1695107400000,
            },
            {
                sender: "You",
                message: "Good night, sleep well!",
                timestamp: 1695108000000,
            },
        ],
        unreadMessages: 0,
    },
    {
        id: 9,
        name: "Ava White",
        profilePic: "https://via.placeholder.com/50?text=AW",
        chats: [
            {
                sender: "You",
                message: "Let's catch up soon.",
                timestamp: 1695077400000,
            },
            {
                sender: "Ava White",
                message: "Sure, how about Thursday?",
                timestamp: 1695078000000,
            },
        ],
        unreadMessages: 0,
    },
    {
        id: 10,
        name: "Noah Harris",
        profilePic: "https://via.placeholder.com/50?text=NH",
        chats: [
            {
                sender: "Noah Harris",
                message: "I'm on my way.",
                timestamp: 1695047400000,
            },
            {
                sender: "You",
                message: "Great, see you soon!",
                timestamp: 1695048000000,
            },
        ],
        unreadMessages: 0,
    },
];

mockUsers.forEach((user) => {
    const { lastMessage, lastMessageTime } = getLastMessage(user.chats);
    user.lastMessage = lastMessage;
    user.lastMessageTime = lastMessageTime;
});
