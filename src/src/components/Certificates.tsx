import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

interface Certificate {
  title: string;
  issuer: string;
  date: string;
  category: 'experience' | 'achievement';
  image?: string;
  link?: string;
  description?: string;
}

interface CertificatesProps {
  certificates?: Certificate[];
}

export function Certificates({ certificates = [] }: CertificatesProps) {
  if (!certificates || certificates.length === 0) {
    return null;
  }

  const experienceCerts = certificates.filter(cert => cert.category === 'experience');
  const achievementCerts = certificates.filter(cert => cert.category === 'achievement');

  const renderCertificateCard = (cert: Certificate, index: number) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      {cert.image && (
        <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
          <img
            src={cert.image}
            alt={cert.title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {cert.title}
          </h3>
          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              aria-label="View certificate"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
        <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">
          {cert.issuer}
        </p>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
          {cert.date}
        </p>
        {cert.description && (
          <p className="text-gray-700 dark:text-gray-300 text-sm">
            {cert.description}
          </p>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="certificates" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Certificates
            </h2>
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </motion.div>

        {experienceCerts.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Experience Certificates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experienceCerts.map((cert, index) => renderCertificateCard(cert, index))}
            </div>
          </div>
        )}

        {achievementCerts.length > 0 && (
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Achievement Certificates
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievementCerts.map((cert, index) => renderCertificateCard(cert, index))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
