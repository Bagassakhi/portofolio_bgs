import FadeIn from './FadeIn';

export default function SectionTitle({ title, subtitle }) {
  return (
    <FadeIn className="text-center mb-14">
      <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-gray-500 dark:text-gray-400 text-lg">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-16 h-1 rounded-full bg-linear-to-r from-indigo-500 to-purple-600" />
    </FadeIn>
  );
}
