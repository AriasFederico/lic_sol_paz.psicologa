import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { iconMap } from '../../../data/iconMap';
import { SectionLayout } from '../';
import styles from './FaqSection.module.scss';

export const FaqSection = ({ data }) => {
    const [activeId, setActiveId] = useState(null);

    const toggleFAQ = (id) => {
        setActiveId(activeId === id ? null : id);
    };

    const Icon = iconMap.arrowFaq;
    const { title, items } = data;

    return (
        <SectionLayout id={'faq'}>
            <div className={styles.container}>
                <h2 className={styles.title}>{title}</h2>

                <div className={styles.items}>
                    {items?.map((item) => {
                        const isOpen = activeId === item.id;

                        return (
                            <div key={item.id} className={`${styles.faq} ${isOpen ? styles.open : ''}`}>
                                <button onClick={() => toggleFAQ(item.id)} type='button' className={styles.button}>
                                    <Icon size={22} className={styles.icon} />
                                    <h3 className={styles.quest}>{item.quest}</h3>
                                </button>
                                <div className={styles.wrapper}>
                                    <div className={styles.content}>
                                        <p className={styles.response}>{item.response}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </SectionLayout>
    );
};
