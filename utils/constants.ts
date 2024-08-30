import Content from '@/data/content.json';

export const HERO_SECTION_TITLE = Content.sections.find(section => section.title === 'Hero')?.content.hero_title || "Hero Title";
export const PORTFOLIO_SECTION_ABOUT_US_CONTENT = Content.sections.find(section => section.title === 'Portfolio')?.content.about_us_content || "About Us Content";
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