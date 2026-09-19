import { BsFillStarFill } from 'react-icons/bs';
import { Badge, ButtonCta, ReviewCard } from '../../ui';
import { SectionLayout } from '../';
import styles from './ReviewsSection.module.scss';
export const ReviewsSection = ({ data }) => {
    const { badge, title, items, subtitle } = data;
    return (
        <SectionLayout bgVariant={'soft'} id={'reviews'}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <Badge text={badge.label} className={styles.badge} iconLeft={badge.icon} />
                    <h2>{title}</h2>
                    <div className={styles.infoRating}>
                        <p>{subtitle}</p>
                    </div>
                </div>

                <div className={styles.items}>
                    {items?.map(({ id, name, rating, review }) => (
                        <ReviewCard key={id} name={name} stars={rating} review={review} />
                    ))}
                </div>
            </div>
        </SectionLayout>
    );
};
