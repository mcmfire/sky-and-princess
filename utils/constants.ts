import Content from '@/data/content.json';

export const GROOM_NAME = Content.groom.name || "Groom";
export const BRIDE_NAME = Content.bride.name || "Bride";
export const CHURCH_NAME = Content.church_name || "Church Name";
export const RECEPTION_NAME = Content.reception_name || "Reception Name";
export const HASHTAG = Content.hashtag || "#Hashtag";
export const SPOTIFY_PLAYLIST = process.env.NEXT_PUBLIC_SPOTIFY_PLAYLIST_URL || "Playlist";
export const DISCORD_WEBHOOK = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || "Webhook";
export const PREPARATION_TIME = Content.preparation_time || "four years";

export const PORTFOLIO_SECTION_ABOUT_US_CONTENTS = Content.sections.find(section => section.title === 'Portfolio')?.content.about_us_contents || ["About Us Content 1"];
export const PORTFOLIO_SECTION_LIFE_HIGHLIGHTS = Content.sections.find(section => section.title === 'Portfolio')?.content.life_highlights || [{
    title: "Highlight 1",
    content: "Highlight Content 1"
}, {
    title: "Highlight 2",
    content: "Highlight Content 2"
}, {
    title: "Highlight 3",
    content: "Highlight Content 3"
}];
export const PORTFOLIO_SECTION_GROOM_SKILLS = Content.sections.find(section => section.title === 'Portfolio')?.content.groom_skills || [{
    label: "Skill 1",
    progress: 100
}, {
    label: "Skill 2",
    progress: 100
}, {
    label: "Skill 3",
    progress: 100
}, {
    label: "Skill 4",
    progress: 100
}];
export const PORTFOLIO_SECTION_BRIDE_SKILLS = Content.sections.find(section => section.title === 'Portfolio')?.content.bride_skills || [{
    label: "Skill 1",
    progress: 100
}, {
    label: "Skill 2",
    progress: 100
}, {
    label: "Skill 3",
    progress: 100
}, {
    label: "Skill 4",
    progress: 100
}];

export const PROGRAM_SECTION_COUNTDOWN_TARGET_DATE = Content.sections.find(section => section.title === 'Program')?.content.countdown_target_date || Date.now();
export const PROGRAM_SECTION_COUNTDOWN_SHORT_DATE = Content.sections.find(section => section.title === 'Program')?.content.countdown_short_date || "January 1";
export const PROGRAM_SECTION_COUNTDOWN_TIME = Content.sections.find(section => section.title === 'Program')?.content.countdown_time || "12:00 PM";
export const PROGRAM_SECTION_BIBLE_QUOTE_VERSE = Content.sections.find(section => section.title === 'Program')?.content.bible_quote_verse || "Bible Verse";
export const PROGRAM_SECTION_BIBLE_QUOTE_REFERENCE = Content.sections.find(section => section.title === 'Program')?.content.bible_quote_reference || "Bible Reference";
export const PROGRAM_SECTION_TIMELINE = Content.sections.find(section => section.title === 'Program')?.content.timeline || [
    {
        "icon": "CHURCH",
        "title": "Ceremony",
        "time": "2:00 PM"
    },
    {
        "icon": "DINE",
        "title": "Reception",
        "time": "4:00 PM"
    }
];
export const PROGRAM_SECTION_CHURCH_GMAPS_LINK = Content.sections.find(section => section.title === 'Program')?.content.church_gmaps_link || "https://www.google.com/maps";
export const PROGRAM_SECTION_CHURCH_ADDRESS = Content.sections.find(section => section.title === 'Program')?.content.church_address || "Church Address";
export const PROGRAM_SECTION_RECEPTION_GMAPS_LINK = Content.sections.find(section => section.title === 'Program')?.content.reception_gmaps_link || "https://www.google.com/maps";
export const PROGRAM_SECTION_RECEPTION_ADDRESS = Content.sections.find(section => section.title === 'Program')?.content.reception_address || "Reception Address";
export const PROGRAM_SECTION_DRESS_CODE_THEME = Content.sections.find(section => section.title === 'Program')?.content.dress_code?.theme || "Theme";
export const PROGRAM_SECTION_DRESS_CODE_GENTLEMEN_ATTIRE = Content.sections.find(section => section.title === 'Program')?.content.dress_code?.gentlemen_attire || "Attire";
export const PROGRAM_SECTION_DRESS_CODE_LADIES_ATTIRE = Content.sections.find(section => section.title === 'Program')?.content.dress_code?.ladies_attire || "Attire";
export const PROGRAM_SECTION_DRESS_CODE_GENTLEMEN_NOT_ALLOWED_COLORS = Content.sections.find(section => section.title === 'Program')?.content.dress_code?.gentlemen_not_allowed_colors || "Color";
export const PROGRAM_SECTION_DRESS_CODE_LADIES_NOT_ALLOWED_COLORS = Content.sections.find(section => section.title === 'Program')?.content.dress_code?.ladies_not_allowed_colors || "Color";
export const PROGRAM_SECTION_DRESS_CODE_LADIES_COLORS = Content.sections.find(section => section.title === 'Program')?.content.dress_code?.ladies_colors || [
    {
        "label": "Black",
        "color": "000000"
    },
    {
        "label": "White",
        "color": "FFFFFF"
    }
];
export const PROGRAM_SECTION_ENTOURAGE_PRINCIPAL_SPONSORS = Content.sections.find(section => section.title === 'Program')?.content.sponsors?.principal || ["Sponsor"];
export const PROGRAM_SECTION_ENTOURAGE_GROOM_PARENTS = Content.sections.find(section => section.title === 'Program')?.content.groom_parents || ["Father", "Mother"];
export const PROGRAM_SECTION_ENTOURAGE_BRIDE_PARENTS = Content.sections.find(section => section.title === 'Program')?.content.bride_parents || ["Father", "Mother"];
export const PROGRAM_SECTION_ENTOURAGE_BESTMAN = Content.sections.find(section => section.title === 'Program')?.content.entourage?.bestman || ["Bestman"];
export const PROGRAM_SECTION_ENTOURAGE_MATRON_OF_HONOR = Content.sections.find(section => section.title === 'Program')?.content.entourage?.matron_of_honor || ["Matron of Honor"];
export const PROGRAM_SECTION_ENTOURAGE_GROOMSMEN = Content.sections.find(section => section.title === 'Program')?.content.entourage?.groomsmen || ["Groomsman"];
export const PROGRAM_SECTION_ENTOURAGE_BRIDESMAID = Content.sections.find(section => section.title === 'Program')?.content.entourage?.bridesmaids || ["Bridesmaid"];
export const PROGRAM_SECTION_ENTOURAGE_CANDLE = Content.sections.find(section => section.title === 'Program')?.content.entourage?.candle || ["Candle"];
export const PROGRAM_SECTION_ENTOURAGE_VEIL = Content.sections.find(section => section.title === 'Program')?.content.entourage?.veil || ["Veil"];
export const PROGRAM_SECTION_ENTOURAGE_CORD = Content.sections.find(section => section.title === 'Program')?.content.entourage?.cord || ["Cord"];
export const PROGRAM_SECTION_ENTOURAGE_RING_BEARER = Content.sections.find(section => section.title === 'Program')?.content.entourage?.ring_bearer || ["Ring Bearer"];
export const PROGRAM_SECTION_ENTOURAGE_COIN_BEARER = Content.sections.find(section => section.title === 'Program')?.content.entourage?.coin_bearer || ["Coin Bearer"];
export const PROGRAM_SECTION_ENTOURAGE_BIBLE_BEARER = Content.sections.find(section => section.title === 'Program')?.content.entourage?.bible_bearer || ["Bible Bearer"];
export const PROGRAM_SECTION_ENTOURAGE_FLOWER_BOY = Content.sections.find(section => section.title === 'Program')?.content.entourage?.flower_boy || ["Flower Boy"];

export const RSVP_WEDDING_DATE = Content.sections.find((section) => section.title === "RSVP")?.content.rsvp_wedding_date || "January 1, 2001";
export const RSVP_WEDDING_TIME = Content.sections.find((section) => section.title === "RSVP")?.content.rsvp_wedding_time || "12AM";
export const RSVP_DEADLINE = Content.sections.find((section) => section.title === "RSVP")?.content.rsvp_deadline || "December 31, 2001";
export const RSVP_GIFT_MESSAGE = Content.sections.find((section) => section.title === "RSVP")?.content.rsvp_gift_message || "Gift Message";
export const RSVP_FAQS = Content.sections.find((section) => section.title === "RSVP")?.content.faqs || [
    {
        "icon": "QUESTION",
        "question": "Question 1",
        "answer": "Answer 1"
    }
];

export const DEFAULT_SEQUENCE_CODE = Content.default_sequence_code || [];

export const NEXT_PUBLIC_FIREBASE_API_KEY = process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "";
export const NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "";
export const NEXT_PUBLIC_FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "";
export const NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "";
export const NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "";
export const NEXT_PUBLIC_FIREBASE_APP_ID = process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "";
export const NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "";
