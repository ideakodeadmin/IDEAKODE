import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EventDetail from '@/components/EventDetail';
import { events, getEventBySlug } from '@/data';

export function generateStaticParams() {
  return events.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: 'Event not found' };
  return { title: event.name, description: event.description };
}

export default async function EventPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();
  return <EventDetail event={event} />;
}
