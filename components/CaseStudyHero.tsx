"use client";

import Image from 'next/image';
import type { CSSProperties, ReactNode } from 'react';

type HeroChip = {
  label: string;
  value: ReactNode;
};

type HeroStat = {
  num: ReactNode;
  label: ReactNode;
};

type PreviewCard = {
  label: string;
  value: ReactNode;
};

type CaseStudyHeroProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  subtitle: ReactNode;
  chips?: HeroChip[];
  stats?: HeroStat[];
  background?: string;
  className?: string;
  eyebrowStyle?: CSSProperties;
  titleStyle?: CSSProperties;
  subtitleStyle?: CSSProperties;
  statsColumns?: number;
  media?: ReactNode;
  mediaClassName?: string;
};

type CaseStudyPreviewProps = {
  url: string;
  title: ReactNode;
  subtitle: ReactNode;
  accent: string;
  imageSrc?: string;
  imageAlt?: string;
  cards: PreviewCard[];
  cardAccent?: string;
  tone?: 'dark' | 'light';
};

export function CaseStudyPreview({
  url,
  title,
  subtitle,
  accent,
  imageSrc,
  imageAlt,
  cards,
  cardAccent,
  tone = 'dark',
}: CaseStudyPreviewProps) {
  return (
    <div className={`cs-preview cs-preview-${tone}`} style={{ '--preview-accent': accent } as CSSProperties}>
      <div className="cs-preview-bar">
        <div className="cs-preview-dots" aria-hidden="true">
          <span className="cs-preview-dot is-red" />
          <span className="cs-preview-dot is-amber" />
          <span className="cs-preview-dot is-green" />
        </div>
        <div className="cs-preview-url">{url}</div>
      </div>

      <div className="cs-preview-stage">
        {imageSrc ? (
          <div className="cs-preview-image-wrap">
            <Image className="cs-preview-image" src={imageSrc} alt={imageAlt ?? ''} fill sizes="(max-width: 900px) 100vw, 520px" />
          </div>
        ) : (
          <div className="cs-preview-dashboard">
            <div className="cs-preview-kicker">Live interface</div>
            <div className="cs-preview-headline">{title}</div>
            <div className="cs-preview-copy">{subtitle}</div>
            <div className="cs-preview-dashboard-grid">
              <div className="cs-preview-panel">
                <span className="cs-preview-panel-label">Core View</span>
                <strong>{title}</strong>
                <p>{subtitle}</p>
              </div>
              <div className="cs-preview-panel cs-preview-panel-accent">
                <span className="cs-preview-panel-label">Current focus</span>
                <strong>Unified visual language</strong>
                <p>Shared shell, one visual language, different project content.</p>
              </div>
            </div>
          </div>
        )}

        <div className="cs-preview-card-grid">
          {cards.map((card, index) => (
            <div key={`${card.label}-${index}`} className="cs-preview-card" style={cardAccent ? { '--card-accent': cardAccent } as CSSProperties : undefined}>
              <div className="cs-preview-card-value">{card.value}</div>
              <div className="cs-preview-card-label">{card.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function CaseStudyHero({
  eyebrow,
  title,
  subtitle,
  chips,
  stats,
  background,
  className,
  eyebrowStyle,
  titleStyle,
  subtitleStyle,
  statsColumns,
  media,
  mediaClassName,
}: CaseStudyHeroProps) {
  const hasMedia = Boolean(media);

  return (
    <section
      className={`cs-hero cs-hero-dark ${className ?? ''}`.trim()}
      style={{ background, paddingBottom: 0, overflow: 'hidden' }}
    >
      <div className={hasMedia ? 'cs-hero-shell' : 'cs-hero-inner'}>
        <div className="cs-hero-copy">
          <div className="cs-eyebrow reveal" style={eyebrowStyle}>
            {eyebrow}
          </div>
          <h1 className="cs-title reveal reveal-delay-1" style={titleStyle}>
            {title}
          </h1>
          <p className="cs-subtitle reveal reveal-delay-2" style={subtitleStyle}>
            {subtitle}
          </p>

          {chips?.length ? (
            <div className="cs-chips reveal reveal-delay-2">
              {chips.map((chip) => (
                <div key={chip.label} className="cs-chip">
                  <strong>{chip.value}</strong>
                  {chip.label}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {hasMedia ? (
          <div className={`cs-hero-media reveal reveal-delay-2 ${mediaClassName ?? ''}`.trim()}>
            {media}
          </div>
        ) : null}
      </div>

      {stats?.length ? (
        <div
          className="cs-hero-stats reveal"
          style={statsColumns ? { gridTemplateColumns: `repeat(${statsColumns}, 1fr)` } : undefined}
        >
          {stats.map((stat) => (
            <div key={String(stat.label)} className="cs-hero-stat">
              <div className="cs-hero-stat-num">{stat.num}</div>
              <div className="cs-hero-stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      ) : null}
    </section>
  );
}
