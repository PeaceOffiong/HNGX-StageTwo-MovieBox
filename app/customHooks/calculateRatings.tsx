export const calculateRatingPercentage = (
    voteAverage: number,
    voteCount: number
): string => {
    if (voteCount === 0) {
        return '0.0';
    }
    const percentage = (voteAverage / 10) * 100;

    return Math.min(100, percentage).toFixed(1)
};