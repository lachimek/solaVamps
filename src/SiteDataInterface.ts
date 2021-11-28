export default interface SiteData {
    homepageContent: {
        mintSection: {
            mintEnabled: boolean,
            supply: string, 
            mintPrice: string,
            mintMsg: string
        }
        keypointsSection: {
            charity: {
                content: string
            },
            weeklyRewards: {
                content: string
            },
            slatt: {
                content: string
            }
        },
        rewardsSection: {
            content: string
        },
        roadmapSection: {
            roadmapItems: roadmapItem[]
        },
        faqSection: {
            faqEnabled: boolean,
            faqItems: faqItem[]
        }
    }
}

export interface roadmapItem {
    header: string,
    content: string[]
}

export interface faqItem {
    question: string,
    answer: string
}