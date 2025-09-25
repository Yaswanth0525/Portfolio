import React from 'react';
import { motion } from 'framer-motion';
import {
    certifications,
    publications,
    awards,
    codingStats,
} from '../data/portfolio';
import { useLeetCodeStats } from '../hooks/useLeetCodeStats';

const Achievements: React.FC = () => {
    const container = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
    };
    const item = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    // Dynamic LeetCode stats for username provided by the user
    const { stats: lc, loading: lcLoading } = useLeetCodeStats('Bogilayaswanth');

    const totalSolved = lc.totalSolved || codingStats.dsaSolved?.easy + codingStats.dsaSolved?.medium + codingStats.dsaSolved?.hard || codingStats.totalQuestions;
    const easy = lc.easySolved || codingStats.dsaSolved?.easy || 0;
    const medium = lc.mediumSolved || codingStats.dsaSolved?.medium || 0;
    const hard = lc.hardSolved || codingStats.dsaSolved?.hard || 0;

    return (
        <section id="achievements" className="py-20 bg-gray-50 dark:bg-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="max-w-6xl mx-auto"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <motion.div className="text-center mb-16" variants={item}>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Achievements
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* LEFT: Achievements & Coding */}
                        <div className="space-y-8">
                            <motion.div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg" variants={item}>
                                <div className="flex items-center justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Coding Stats</h3>
                                    {lcLoading && <span className="text-xs text-gray-500">Updating…</span>}
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-gray-900 dark:text-gray-100">
                                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                                        <p className="text-3xl font-bold">{totalSolved}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Total Questions</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                                        <p className="text-3xl font-bold">{codingStats.totalActiveDays}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Active Days</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                                        <p className="text-3xl font-bold">{codingStats.totalContests}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Total Contests</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                                        <p className="text-3xl font-bold">{codingStats.leetcodeContests}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">LeetCode</p>
                                    </div>
                                </div>
                                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                                    <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
                                        <p className="text-2xl font-bold text-green-600">{easy}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Easy</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20">
                                        <p className="text-2xl font-bold text-yellow-600">{medium}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Medium</p>
                                    </div>
                                    <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20">
                                        <p className="text-2xl font-bold text-red-600">{hard}</p>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Hard</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg" variants={item}>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Awards</h3>
                                <ul className="grid sm:grid-cols-2 gap-3">
                                    {awards.map((a) => (
                                        <li key={a.id} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
                                            <p className="font-medium text-gray-900 dark:text-white">{a.title}</p>
                                            {a.description ? (
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{a.description}</p>
                                            ) : null}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>

                        {/* RIGHT: Certifications & Publications */}
                        <div className="space-y-8">
                            <motion.div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg" variants={item}>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Certifications</h3>
                                <ul className="space-y-3">
                                    {certifications.map((c) => (
                                        <li key={c.id} className="flex items-start justify-between">
                                            <div>
                                                <p className="font-medium text-gray-900 dark:text-white">{c.title}</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{c.issuer} · {c.date}</p>
                                            </div>
                                            {c.credentialUrl ? (
                                                <a href={c.credentialUrl} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 text-sm">View</a>
                                            ) : null}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            <motion.div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg" variants={item}>
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Publications</h3>
                                <ul className="space-y-3">
                                    {publications.map((p) => (
                                        <li key={p.id} className="flex items-start justify-between">
                                            <div>
                                                <p className="font-medium text-gray-900 dark:text-white">{p.title}</p>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">{p.venue} · {p.date}</p>
                                            </div>
                                            {p.link ? (
                                                <a href={p.link} target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 text-sm">Read</a>
                                            ) : null}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Achievements;
