import { motion } from 'framer-motion';
import { iconMap } from '../../../data/iconMap';
import { ButtonCta } from '../button_cta/ButtonCta';
import styles from './CardService.module.scss';

export const CardService = ({ icon, title, desc, cta, delay }) => {
  const Icon = iconMap[icon];
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className={styles.iconContainer}>{icon && <Icon size={26} />}</div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.desc}>{desc}</p>
      <div className={styles.cta}>
        <ButtonCta
          icon={cta.icon}
          label={cta.label}
          size='sm'
          variant={cta.variant}
          href={cta.href}
        />
      </div>
    </motion.div>
  );
};
