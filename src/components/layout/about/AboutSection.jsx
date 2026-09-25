import { Carrousel } from '../../ui';
import { SectionLayout } from '../';
import styles from './AboutSection.module.scss';
import { about } from './about';
export const AboutSection = () => {

  const { title, subtitle, slides } = about;

  return (
    <SectionLayout bgVariant={'dark'}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.items}>
          <Carrousel data={slides} />
        </div>
      </div>
    </SectionLayout>
  );
};
