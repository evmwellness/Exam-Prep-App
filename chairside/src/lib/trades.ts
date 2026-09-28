export const TRADES = ['hair', 'nails', 'lash_brow'] as const;
export type Trade = (typeof TRADES)[number];

export const TRADE_LABELS: Record<Trade, string> = {
  hair: 'Hair',
  nails: 'Nails',
  lash_brow: 'Lash + brow',
};

export interface TradeField {
  key: string;
  label: string;
  placeholder: string;
  /** Guidance for the extraction model. */
  hint: string;
}

/** Trade-specific card fields. All values are editable free text. */
export const TRADE_FIELDS: Record<Trade, TradeField[]> = {
  hair: [
    { key: 'roots_formula', label: 'Roots formula', placeholder: '7N + 8.1', hint: 'Root colour formula, shades joined with " + " (e.g. "7N + 8.1").' },
    { key: 'lengths_formula', label: 'Lengths / gloss / toner formula', placeholder: 'Gloss 9V + clear, 10 min', hint: 'Formula for lengths, gloss or toner, including lightener/balayage notes.' },
    { key: 'developer_volume', label: 'Developer volume', placeholder: '20 vol', hint: 'Developer strength written as "N vol". If different per step, label each.' },
    { key: 'processing_time', label: 'Processing time', placeholder: 'Roots 35 min; gloss 10 min', hint: 'Processing times in minutes as "N min", labelled per step when there are several.' },
    { key: 'cut_notes', label: 'Cut notes', placeholder: 'Long layers, 2 cm off', hint: 'Cut, shape, length taken off, styling notes.' },
  ],
  nails: [
    { key: 'service_shape', label: 'Service and shape', placeholder: 'Gel-X full set, short almond', hint: 'Service (full set, infill, BIAB, gel mani, removal...) and nail shape.' },
    { key: 'colour', label: 'Colour (brand + shade)', placeholder: 'OPI Bubble Bath', hint: 'Brand and shade name/number, plus finish or nail art.' },
    { key: 'products_system', label: 'Products / system', placeholder: 'Gel-X tips + builder gel', hint: 'System and products used (acrylic, hard gel, BIAB, Gel-X, dip, top coat...).' },
    { key: 'length', label: 'Length', placeholder: 'Short', hint: 'Nail length (e.g. short, medium, long, or a size).' },
  ],
  lash_brow: [
    { key: 'lash_map', label: 'Lash map', placeholder: 'Classic, cat eye, C curl, 9-12 mm, 0.15', hint: 'Style (classic/hybrid/volume), map shape, curl ("C curl"), lengths in mm as a range, thickness as a decimal ("0.07").' },
    { key: 'adhesive', label: 'Adhesive', placeholder: 'Sensitive (low fume)', hint: 'Adhesive name or type and dry time.' },
    { key: 'brow_treatment', label: 'Brow treatment', placeholder: 'Lamination 8 min; tint dark brown 5 min', hint: 'Brow lamination time, tint shade and time, shaping.' },
    { key: 'patch_test_date', label: 'Patch test date', placeholder: '2026-09-28', hint: 'Patch test date as YYYY-MM-DD. "Today" means the visit date.' },
  ],
};

export function isTrade(value: unknown): value is Trade {
  return typeof value === 'string' && (TRADES as readonly string[]).includes(value);
}
