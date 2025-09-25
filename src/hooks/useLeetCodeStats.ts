import { useEffect, useState } from 'react';

export interface LeetCodeStats {
    totalSolved: number;
    easySolved: number;
    mediumSolved: number;
    hardSolved: number;
}

const DEFAULT_STATS: LeetCodeStats = {
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
};

export function useLeetCodeStats(username: string | undefined) {
    const [stats, setStats] = useState<LeetCodeStats>(DEFAULT_STATS);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!username) return;

        let cancelled = false;
        async function load() {
            setLoading(true);
            setError(null);
            try {
                // Using a public community endpoint that mirrors LeetCode profile stats
                const resp = await fetch(`https://leetcode-stats-api.herokuapp.com/${encodeURIComponent(username)}`);
                if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
                const data = await resp.json();
                // Expected fields: totalSolved, easySolved, mediumSolved, hardSolved
                const next: LeetCodeStats = {
                    totalSolved: Number(data.totalSolved) || 0,
                    easySolved: Number(data.easySolved) || 0,
                    mediumSolved: Number(data.mediumSolved) || 0,
                    hardSolved: Number(data.hardSolved) || 0,
                };
                if (!cancelled) setStats(next);
            } catch (e: any) {
                if (!cancelled) setError(e?.message || 'Failed to load');
            } finally {
                if (!cancelled) setLoading(false);
            }
        }
        load();

        return () => {
            cancelled = true;
        };
    }, [username]);

    return { stats, loading, error };
}
