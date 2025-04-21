import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { theme } from '../../styles/theme';
import { FaExternalLinkAlt } from 'react-icons/fa';
import {useTranslation} from "react-i18next";

const ExperiencesSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding: ${theme.spacing.lg} 0;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.xl} 0;
  }
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: clamp(2rem, 4vw, 2.5rem);
  margin-bottom: calc(${theme.spacing.xl} * 1.5);
  color: ${theme.colors.textLight};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -${theme.spacing.md};
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background-color: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (min-width: ${theme.breakpoints.md}) {
    margin-bottom: calc(${theme.spacing.xl} * 2);
  }
`;

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr));
  gap: ${theme.spacing.lg};
  width: 100%;
  margin-top: ${theme.spacing.lg};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.xl};
    margin-top: ${theme.spacing.xl};
  }
`;

const ExperienceCard = styled(motion.div)`
  background: ${theme.colors.glass.background};
  backdrop-filter: blur(8px);
  border-radius: 12px;
  overflow: hidden;
  color: ${theme.colors.textLight};
  transition: all ${theme.transitions.default};
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(246, 177, 122, 0.15);
  }
`;

const ExperienceContent = styled.div`
  padding: ${theme.spacing.md};
  flex: 1;
  display: flex;
  flex-direction: column;

  @media (min-width: ${theme.breakpoints.md}) {
    padding: ${theme.spacing.lg};
  }
`;

const ExperienceTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.5rem);
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.colors.light};
  font-weight: 600;
`;

const ExperienceSubtitle = styled.h5`
    font-size: clamp(0.8rem, 1.2vw, 0.7rem);
    color: ${theme.colors.textLight};
    margin-bottom: ${theme.spacing.sm};
    font-weight: 450;
`;

const ExperienceDescription = styled.p`
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.lg};
  font-size: clamp(0.9rem, 2vw, 1rem);
  line-height: 1.6;
  flex: 1;
  opacity: 0.9;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.md};

  @media (min-width: ${theme.breakpoints.md}) {
    gap: ${theme.spacing.sm};
    margin-bottom: ${theme.spacing.lg};
  }
`;

const TechTag = styled.span`
  background: ${theme.colors.glass.card};
  color: ${theme.colors.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: clamp(0.75rem, 2vw, 0.85rem);
  font-weight: 500;
  transition: all ${theme.transitions.default};

  @media (min-width: ${theme.breakpoints.md}) {
    padding: 6px 12px;
  }

  &:hover {
    background: ${theme.colors.gradient.accent};
    color: ${theme.colors.textDark};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(246, 177, 122, 0.2);
  }
`;

const ExperienceLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: auto;
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  
  a {
    color: ${theme.colors.accent};
    font-size: clamp(1rem, 2vw, 1.2rem);
    transition: all ${theme.transitions.default};
    padding: ${theme.spacing.xs};
    border-radius: 4px;
    
    &:hover {
      color: ${theme.colors.light};
      background: ${theme.colors.glass.card};
      transform: translateY(-2px);
    }
  }
`;

const experiences = [
  {
    id: 0,
    title: "BAUHAUS",
    techStack: ["Python", "Golang", "PostgreSQL", "ReactJS", "Tailwind", "GCP", "Terraform", "Git", "Docker", "Jira", "Datadog"],
    liveUrl: "https://www.bauhaus.info/",
  },
  {
    id: 1,
    title: "momox",
    techStack: ["Python", "PostgreSQL", "GCP", "Kubernetes", "Terraform", "Git", "Docker", "Jira", "RabbitMQ", "Grafana"],
    liveUrl: "https://www.medimops.de/",
  },
  {
    id: 2,
    title: "Sheypoor",
    techStack: ["Python", "PostgreSQL", "Golang", "Git", "Docker", "Jira", "Kubernetes", "Kafka", "Hadoop", "Hive", "Apache Airflow", "Grafana"],
    liveUrl: "https://www.sheypoor.com/",
  },
  {
    id: 3,
    title: "ParsData",
    techStack: ["Python", "Docker", "Git", "Jira", "Mongo", "Memcache", "RabbitMQ", "Kong", "Grafana"],
    liveUrl: "https://www.parsdata.com/",
  },
  {
    id: 4,
    title: "Parspooyesh Fanavar",
    techStack: ["Python", "Golang", "HTML", "CSS", "Javascript", "Docker", "Git", "Jira", "Mongo", "RabbitMQ"],
    liveUrl: "https://parspooyesh.net/en/",
  },
];

const Experiences = () => {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <ExperiencesSection id="experiences" role="region" aria-label="Experiences">
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          role="heading"
          aria-level={2}
        >
          {t('experiences.title')}
        </SectionTitle>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ExperienceGrid role="list">
          {experiences.map((experience) => (
            <ExperienceCard 
              key={experience.id} 
              variants={itemVariants}
              role="listitem"
              aria-labelledby={`experience-title-${experience.id}`}
            >
              <ExperienceContent>
                <ExperienceTitle id={`experience-title-${experience.id}`}>{experience.title}</ExperienceTitle>
                <ExperienceSubtitle>{t(`experiences.items.${experience.id}.subtitle`)}</ExperienceSubtitle>
                <ExperienceDescription>{t(`experiences.items.${experience.id}.description`)}</ExperienceDescription>
                <TechStack role="list" aria-label={`Technologies used in ${experience.title}`}>
                  {experience.techStack.map((tech) => (
                    <TechTag key={tech} role="listitem">{tech}</TechTag>
                  ))}
                </TechStack>
                <ExperienceLinks>
                  <a 
                    href={experience.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label={`Visit ${experience.title} live site`}
                  >
                    <FaExternalLinkAlt aria-hidden="true" />
                    <span className="sr-only">Live site</span>
                  </a>
                </ExperienceLinks>
              </ExperienceContent>
            </ExperienceCard>
          ))}
          </ExperienceGrid>
        </motion.div>
      </div>
    </ExperiencesSection>
  );
};

export default Experiences;
