import React from 'react';
import './CoachingCards.css';

import coachingPrograms from '@/data/coaching.json';

const CoachingCards = () => {
    return (
        <section className="coaching-section">
            <div className="coaching-header">
                <h2>Coaching Programs</h2>
                <p>
                    We provide expert coaching for top international entrance exams. Prepare with confidence using our specialized training.
                </p>
            </div>

            <div className="coaching-card-grid">
                {coachingPrograms.map((program, index) => (
                    <div className="coaching-card" key={index}>
                        <h3>{program}</h3>
                        <p>High-quality coaching tailored to help you succeed in the {program} exam.</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CoachingCards;
