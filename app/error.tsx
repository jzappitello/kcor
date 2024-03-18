'use client';

import Section from '@/components/ui/section';

export default function ErrorPage(props: { readonly reset: () => void }) {
  const { reset } = props;
  return (
    <Section className="h-full items-center justify-center">
      <div className="mx-auto my-4 flex max-w-xl flex-col bg-neutral-50 p-8 md:p-12">
        <h2 className="text-xl font-bold">Oh no!</h2>
        <p className="my-2">
          There was an issue with our storefront. This could be a temporary
          issue, please try your action again.
        </p>
        <button
          className="mx-auto mt-4 flex w-full items-center justify-center rounded-full bg-neutral-800 p-4 tracking-wide text-white hover:opacity-90"
          onClick={() => reset()}
        >
          Try Again
        </button>
      </div>
    </Section>
  );
}
