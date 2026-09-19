import { motion } from 'framer-motion';
import { BsFillStarFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import styles from './ReviewCard.module.scss';

export const ReviewCard = ({ name, stars, review }) => {
    return (
        <motion.div className={styles.card}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: .15 }}
        >
            <p className={styles.review}>"{review}"</p>
        </motion.div>
    );
};
