import { modern } from './modern.js';
import { minimal } from './minimal.js';
import { bold } from './bold.js';
import { tech } from './tech.js';

export const templates = [modern, minimal, bold, tech];

export const templateMap = Object.fromEntries(
  templates.map((t) => [t.id, t])
);

export const renderTemplate = (config) => {
  const tpl = templateMap[config.template] || modern;
  return tpl.render(config);
};
