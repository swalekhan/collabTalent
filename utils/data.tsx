export interface NavArr {
    id: number;
    title: string;
    imgurl: string;
}
export const navArr: NavArr[] = [
    { id: 1, title: "Share", imgurl: '/Vector.svg', },
]


export interface Item {
    id: number;
    title: string;
    paragraph: string;
}
export const items: Item[] = [
    { id: 1, title: "Faster feedback", paragraph: "Clear instructions and next steps for fast improvement" },
    { id: 2, title: "Any time", paragraph: "Prep at your own time and pace. 24/7 availability." },
    { id: 3, title: "Team up", paragraph: "Invite friends and advisors to help you with your interview prep in their own time." },
]


export interface PracticeItem {
    id: number;
    title: string;
    url?: string;
}
export const practItems: PracticeItem[] = [
    { id: 1, title: "Software developer" },
    { id: 2, title: "Data Scientist" },
    { id: 3, title: "Strategy Consultant" },
    { id: 4, title: "Financial Analysts" },
]

export const shareWeb = () => {
    if (navigator.share) {
        navigator.share({
            title: 'Collabtalent beta',
            url: 'https://collabtalent-next-js.vercel.app/'
        }).then(() => {
            console.log('Successfully shared');
        }).catch((error) => {
            console.error('Error sharing:', error);
        });
    }
}


interface HireArr {
    id: number;
    title: string;
}

export const hireLeft: HireArr[] = [
    { id: 1, title: "Know what was happening, while you were away" },
    { id: 2, title: "Use suggested questionnaire, or create your own custom questions" },
    { id: 3, title: "Interview candidates where they are and when they can" },
]

export const hireRight: HireArr[] = [
    { id: 1, title: "Find your super hires, before they are actually hired" },
    { id: 2, title: "Recalibrate with ease as your hiring needs evolve" },
    { id: 3, title: "Trust your gut and instincts, but back it up with data" },
]
