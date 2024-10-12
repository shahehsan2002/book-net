// Helper function for delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getCommentsById = async (postId: string, wait = false) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API}/comments?postId=${postId}`
    );
    
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    if (wait) {
        // Wait for 2 seconds before proceeding
        await delay(2000);
    }
    
    return res.json();
};
