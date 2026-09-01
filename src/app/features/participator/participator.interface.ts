export type RankingPeriod = 'weekly' | 'monthly' | 'yearly';

export interface ParticipatorAchievement {
	place: 1 | 2 | 3;
	period: string;
	label: string;
}

export interface ParticipatorStory {
	title: string;
	url: string;
}

export interface Participator {
	username: string;
	name: string;
	points: number;
	achievements: ParticipatorAchievement[];
	stories: ParticipatorStory[];
}

export interface ParticipatorRankingEntry {
	username: string;
	points: number;
}
