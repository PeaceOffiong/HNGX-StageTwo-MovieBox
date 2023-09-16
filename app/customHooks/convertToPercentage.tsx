
export const convertToPercentage = (vote_average:number) => {
    const clampedVoteAverage = Math.min(10, Math.max(0, vote_average));
    const percentage = clampedVoteAverage * 10;
    return percentage;
}