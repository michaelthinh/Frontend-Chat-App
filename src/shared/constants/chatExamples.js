export const getRandomVisitMessage = () => {
    const examples = [
        "I'm interested in learning more about your services.",
        "Can you provide a quote for your premium package?",
        "I'd like to schedule a consultation to discuss my project.",
        "What are your business hours?",
        "Can you send me more information about your company?",
        "I'm interested in your free trial offer.",
        "Can you provide a demo of your product?",
        "I'd like to learn more about your pricing plans.",
        "Can you answer some questions about your services?",
        "I'm interested in scheduling a meeting to discuss a potential partnership.",
    ];

    return examples[Math.floor(Math.random() * examples.length)];
};

export const getRandomOfferMessage = () => {
    const examples = [
        "I'd like to make you a special offer on our premium package.",
        "We have a limited time discount on our services, would you like to hear more?",
        "I can offer you a free trial of our product, are you interested?",
        "We're running a promotion and I'd like to extend an exclusive offer to you.",
        "I can provide a custom quote for your project, would you like me to send it over?",
        "We're offering a free consultation to discuss your project, would you like to schedule one?",
        "I'd like to offer you a demo of our product, would you be interested?",
        "We have a special deal for new customers, would you like to hear more about it?",
        "I can offer you a personalized solution for your business, would you like to discuss it?",
        "We're offering a discount for first-time customers, would you like to take advantage of it?",
    ];

    return examples[Math.floor(Math.random() * examples.length)];
};
