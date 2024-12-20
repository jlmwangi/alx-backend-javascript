export interface MajorCredits {
	credits: number;
	brand: string;
};

export interface MinorCredits {
	credits: number;
	brand: string;
};

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		brand: subject1.brand
	};
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
	return {
		credits: subject1.credits + subject2.credits,
		brand: subject1.brand
	};
}
