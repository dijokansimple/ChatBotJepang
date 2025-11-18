export default {
  expo: {
    name: "ChatbotJepang",
    slug: "ChatbotJepang",
    scheme: "chatbotjepang",   // <––– INI YANG DIPERLUKAN

    extra: {
      GEMINI_API_KEY: process.env.EXPO_PUBLIC_GEMINI_KEY,
    },
  },
};
