import React, { useState, useEffect } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './index.scss';
import { ImgUrl } from '../../model';

export interface TestimonialRes {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    company: string
    feedback: string
    imgurl: ImgUrl
    name: string
}
export interface Brand {
    _createdAt: string
    _id: string
    _rev: string
    _type: string
    _updatedAt: string
    imgUrl: ImgUrl
    name: string
}
const TestimonialCom = () => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [testimonials, setTestimonials] = useState<TestimonialRes[]>([]);
    const [brands, setBrands] = useState<Brand[]>([]);

    const handleClick = (index: number) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const query = '*[_type == "testimonials"]';
        const brandsQuery = '*[_type == "brands"]';

        client.fetch(query).then((data) => {
            console.log(data, "testimonial")
            setTestimonials(data);
        });

        client.fetch(brandsQuery).then((data) => {
            console.log(data, "brands")
            setBrands(data);
        });
    }, []);

    return (
        <>
            {testimonials.length && (
                <>
                    <div className="app__testimonial-item app__flex">
                        <img src={urlFor(testimonials[currentIndex].imgurl).url()}
                            alt={testimonials[currentIndex].name} />
                        <div className="app__testimonial-content">
                            <p className="p-text">{testimonials[currentIndex].feedback}</p>
                            <div>
                                <h4 className="bold-text">{testimonials[currentIndex].name}</h4>
                                <h5 className="p-text">{testimonials[currentIndex].company}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="app__testimonial-btns app__flex">
                        <div className="app__flex" onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                            <HiChevronLeft />
                        </div>

                        <div className="app__flex" onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}

            <div className="app__testimonial-brands app__flex">
                {brands.map((brand) => (
                    <motion.div
                        whileInView={{ opacity: [0, 1] }}
                        transition={{ duration: 0.5, type: 'tween' }}
                        key={brand._id}
                    >
                        <img src={urlFor(brand.imgUrl).url()} title={brand.name} alt={brand.name} />
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrap(
    MotionWrap(TestimonialCom, 'app__testimonial'),
    'testimonial',
    'app__primarybg',
);
