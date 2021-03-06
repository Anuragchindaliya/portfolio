import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// import { AppWrap, MotionWrap } from '../../wrapper';
import { AppWrap } from '../../wrapper';
import './index.scss';
import { urlFor, client } from '../../client';
import { ImgUrl } from '../../model';
interface AboutRes {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    description: string
    imgUrl: ImgUrl
    title: string
}
const About = () => {
    const [abouts, setAbouts] = useState<AboutRes[]>([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query).then((data) => {
            setAbouts(data);
        });
    }, []);
    return (
        <>
            <h2 className="head-text">I Know that <span>Good Apps</span> <br />means  <span>Good Business</span></h2>

            <div className="app__profiles">
                {abouts?.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        className="app__profile-item"
                        key={about['title'] + index}
                    >
                        <img src={urlFor(about['imgUrl']).url()} alt={about['title']} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>{about['title']}</h2>
                        <p className="p-text" style={{ marginTop: 10 }}>{about['description']}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

// export default AppWrap(
//   MotionWrap(About, 'app__about'),
//   'about',
//   'app__whitebg',
// );
export default AppWrap(About, "about", "app_whitebg");