import React, { useState, useEffect, Fragment } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './index.scss';
import { Asset } from '../../model';

interface Experience {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    works: ExWork[]
    year: string
}

interface ExWork {
    _key: string
    _type: string
    company: string
    desc: string
    name: string
}
interface Skill {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    icon: Icon
    name: string
}
interface Icon {
    _type: string
    asset: Asset
}

const Skills = () => {
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [skills, setSkills] = useState<Skill[]>([]);

    useEffect(() => {
        const query = '*[_type == "experiences"]';
        const skillsQuery = '*[_type == "skills"]';

        client.fetch(query).then((data) => {
            setExperiences(data);
            console.log("data recent", data)
        });

        client.fetch(skillsQuery).then((data) => {
            setSkills(data);
        });
    }, []);

    return (
        <>
            <h2 className="head-text">Skills & Experiences</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill: Skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill._id}
                        >
                            <div
                                className="app__flex"
                            // style={{ backgroundColor: skill['bgColor'] }}
                            >
                                <img src={urlFor(skill['icon']).url()} alt={skill['name']} />
                            </div>
                            <p className="p-text">{skill['name']}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <div className="app__skills-exp">
                    {experiences.map((experience: Experience) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={experience._id}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{experience['year']}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience.works.map((work: ExWork) => (
                                    <Work work={work} key={work._key} />
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </>
    );
};


const Work = ({ work }: { work: ExWork }) => {
    const [isVisible, setVisible] = useState(false);
    return <>
        <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__skills-exp-work"

        // key={work._key}
        >
            <div
                data-tip={work.desc}
                data-for={work.name}

                onMouseEnter={() => setVisible(true)}
                onMouseLeave={() => {
                    setVisible(false);
                    setTimeout(() => setVisible(true), 50);
                }}
            >
                <h4 className="bold-text">{work.name}</h4>
                <p className="p-text">{work.company}</p>
            </div>
        </motion.div>
        {isVisible && <ReactTooltip
            id={work.name}
            effect="solid"
            arrowColor="#fff"
            className="skills-tooltip" />
        }
    </>
}

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills',
    'app__whitebg',
);
