import Content from '@/data/content.json';

export const HERO_SECTION_TITLE = Content.sections.find(section => section.title === 'Hero')?.content.hero_title || "Hero Title";
export const HERO_SECTION_DATE = Content.sections.find(section => section.title === 'Hero')?.content.hero_date || "01.01.2001";
export const HERO_SECTION_TIME = Content.sections.find(section => section.title === 'Hero')?.content.hero_time || "12PM";
export const HERO_SECTION_VENUE_NAME = Content.sections.find(section => section.title === 'Hero')?.content.hero_venue_name || "Venue Name";
export const HERO_SECTION_VENUE_SHORT_ADDRESS = Content.sections.find(section => section.title === 'Hero')?.content.hero_venue_short_address || "Venue Short Address";

export const PORTFOLIO_SECTION_ABOUT_US_CONTENT_ONE = Content.sections.find(section => section.title === 'Portfolio')?.content.about_us_content_one || "About Us Content 1";
export const PORTFOLIO_SECTION_ABOUT_US_CONTENT_TWO = Content.sections.find(section => section.title === 'Portfolio')?.content.about_us_content_two || "About Us Content 2";
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

export const PROGRAM_SECTION_COUNTDOWN_TARGET_DATE = Content.sections.find(section => section.title === 'Program')?.content.countdown_target_date || Date.now();
export const PROGRAM_SECTION_BIBLE_QUOTE_VERSE = Content.sections.find(section => section.title === 'Program')?.content.bible_quote_verse || "Bible Verse";
export const PROGRAM_SECTION_BIBLE_QUOTE_REFERENCE = Content.sections.find(section => section.title === 'Program')?.content.bible_quote_reference || "Bible Reference";

export const PROGRAM_SECTION_VENUE_NAME = Content.sections.find(section => section.title === 'Program')?.content.venue_name || "Venue Name";
export const PROGRAM_SECTION_VENUE_GMAPS_QR_LINK = Content.sections.find(section => section.title === 'Program')?.content.venue_gmaps_qr_link || "https://www.google.com/maps/@13.6239101,120.0924022,6.29z?entry=ttu&g_ep=EgoyMDI0MDgyNy4wIKXMDSoASAFQAw%3D%3D";
export const PROGRAM_SECTION_VENUE_ADDRESS = Content.sections.find(section => section.title === 'Program')?.content.venue_address || "Venue Address";
export const PROGRAM_SECTION_ENTOURAGE = Content.sections.find(section => section.title === 'Program')?.content.entourage || {
    "tier_one": [
        {
            "name": "Name 1",
            "role": "BESTMAN"
        },
        {
            "name": "Name 2",
            "role": "MATRON OF HONOR"
        }
    ],
    "tier_two": [
        {
            "name": "Name 3",
            "role": "GROOMSMAN"
        },
        {
            "name": "Name 4",
            "role": "BRIDESMAID"
        }
    ],
    "tier_three": [
        {
            "name": "Name 5",
            "role": "CANDLE"
        },
        {
            "name": "Name 6",
            "role": "VEIL"
        },
        {
            "name": "Name 7",
            "role": "CORD"
        }
    ],
    "tier_four": [
        {
            "name": "Name 8",
            "role": "BIBLE"
        },
        {
            "name": "Name 9",
            "role": "RING"
        },
        {
            "name": "Name 10",
            "role": "COIN"
        }
    ],
    "tier_five": [
        {
            "name": "Name 11",
            "role": "FLOWER BOY"
        }
    ]
};

export const RSVP_WEDDING_DATE = Content.sections.find((section) => section.title === "RSVP")?.content.rsvp_wedding_date || "January 1, 2001";
export const RSVP_WEDDING_TIME = Content.sections.find((section) => section.title === "RSVP")?.content.rsvp_wedding_time || "12AM";
export const RSVP_DEADLINE = Content.sections.find((section) => section.title === "RSVP")?.content.rsvp_deadline || "December 31, 2001";
export const DEFAULT_SEQUENCE_CODE = Content.default_sequence_code || [];