import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { ButtonCta, CardService } from '../../ui';
import { SectionLayout } from '../';
import styles from './ServicesSection.module.scss';

export const ServicesSection = ({ data }) => {
  const { title, subtitle, items } = data;

  // Estado para alternar entre ver los primeros 6 o ver los 9
  const [isExpanded, setIsExpanded] = useState(false);

  // Mostramos 6 o todos según el estado
  const visibleItems = isExpanded ? items : items?.slice(0, 6);

  const toggleShowMore = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <SectionLayout bgVariant={'soft'} id={'services'}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        {/* layout le dice a Framer Motion que reanime suavemente la rejilla al cambiar su tamaño */}
        <motion.div layout className={styles.items}>
          <AnimatePresence>
            {visibleItems?.map(({ id, delay, icon, title, desc, cta }) => (
              <motion.div
                key={id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <CardService
                  delay={delay}
                  icon={icon}
                  title={title}
                  desc={desc}
                  cta={cta}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* El botón permanece siempre visible y cambia su texto */}
        {/* <div className={styles.cta}>
          <ButtonCta
            label={isExpanded ? 'Mostrar menos' : 'Mostrar más'}
            size='sm'
            icon={isExpanded ? 'arrowUp' : 'arrowDown'}
            onClick={toggleShowMore}
          />
        </div> */}
      </div>
    </SectionLayout>
  );
};
