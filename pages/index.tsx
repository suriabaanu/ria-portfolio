import siteMetadata from '@/data/siteMetadata';
import Link from '@/components/Link';
import { PageSEO } from '@/components/SEO';

export default function Home() {
  return (
    <>
      <PageSEO title={siteMetadata.headerTitle} description={siteMetadata.description} />
      <section className='flex flex-col items-center text-center'>
        <h1 className='mb-4 text-4xl font-extrabold tracking-tight dark:text-white sm:text-5xl'>
          {siteMetadata.headerTitle}
        </h1>
        <p className='mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300'>
          {siteMetadata.description}
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
          <Link
            href='/blog'
            className='rounded-md bg-gray-900 px-5 py-2.5 text-white shadow hover:bg-gray-700 dark:bg-white dark:text-black dark:hover:bg-gray-200'
          >
            Blog
          </Link>
          <Link
            href='/projects'
            className='rounded-md border border-gray-300 px-5 py-2.5 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800'
          >
            Projects
          </Link>
          <Link
            href='/about'
            className='rounded-md border border-gray-300 px-5 py-2.5 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800'
          >
            About
          </Link>
        </div>
      </section>
    </>
  );
}
