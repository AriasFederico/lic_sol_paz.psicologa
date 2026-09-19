import { ButtonCta } from '../../ui';
import styles from './CtaSection.module.scss';

export const CtaSection = ({ data }) => {
    const { title, text, cta } = data;
    return (
        <div className={styles.ctaSection}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.title}>{title}</h2>
                    <p className={styles.text}>{text}</p>
                    <div className={styles.cta}>
                        {cta?.map(({ icon, label, variant, href }) => (
                            <ButtonCta label={label} size='md' variant={variant} icon={icon} key={variant} href={href} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
