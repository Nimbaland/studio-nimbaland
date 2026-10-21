import { showDrafts } from "@/content/site";
import type { PortfolioProject } from "./types";
import kratzert from "./kratzert";
import circleUp from "./circle-up";
import bales from "./bales";
import tervica from "./tervica";
import tinaSood from "./tina-sood";
import mkg from "./mkg-koeln-west";
import physiofit from "./physiofit-mobil";
import variari from "./variari";
import lebensbuch from "./das-lebensbuch";
import waiturn from "./waiturn";
import grid from "./the-grid-bar";
import flamingo from "./flamingo-swift";
import brick from "./brick-no-10";
import solitaire from "./solitaire";
import emmler from "./emmler-lofts";
import frauenzimmer from "./frauenzimmer-wolfsburg";
import logos from "./logo-design";
import aurum from "./aurum-herbs";
// Nimbaland (eigene Marke) ist vorbereitet, aber aktuell nicht in der Auswahl:
// import nimbaland from "./nimbaland";

/**
 * Neues Projekt hinzufügen:
 *  1. `_template.ts` kopieren → `<slug>.ts`, ausfüllen
 *  2. Bilder nach /public/projects/<slug>/ legen
 *  3. Hier importieren und in `all` eintragen
 *  4. Nach Freigabe `published: true` setzen
 */
const all: PortfolioProject[] = [mkg, tervica, kratzert, physiofit, tinaSood, circleUp, variari, bales, lebensbuch, waiturn, grid, flamingo, brick, solitaire, emmler, frauenzimmer, logos, aurum];

/** Jüngstes Jahr aus Angaben wie "2026" oder "2018–2019" (ohne Jahr: ganz hinten). */
export function projectYear(p: PortfolioProject): number {
  const years = (p.year ?? "").match(/\d{4}/g);
  return years ? Math.max(...years.map(Number)) : 0;
}

/** Sortierschlüssel: "JJJJ-MM" aus `date`, sonst das jüngste Jahr. */
function chrono(p: PortfolioProject): string {
  return p.date ?? `${projectYear(p)}-00`;
}

/** Projekte, die auf der Website sichtbar sind – chronologisch, die neuesten zuerst. */
export function getProjects(): PortfolioProject[] {
  return all
    .filter((p) => p.published || showDrafts)
    .sort((a, b) => chrono(b).localeCompare(chrono(a)) || a.order - b.order);
}

export function getFeaturedProjects(limit = 6): PortfolioProject[] {
  return getProjects().filter((p) => p.featured).slice(0, limit);
}

export function getProject(slug: string): PortfolioProject | undefined {
  return getProjects().find((p) => p.slug === slug);
}

export function getNextProject(slug: string): PortfolioProject | undefined {
  const list = getProjects();
  const i = list.findIndex((p) => p.slug === slug);
  if (i === -1 || list.length < 2) return undefined;
  return list[(i + 1) % list.length];
}

export type { PortfolioProject, ProjectImage } from "./types";
