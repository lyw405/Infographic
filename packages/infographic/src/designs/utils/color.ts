import type { ParsedInfographicOptions } from '../../options';
import { getPaletteColor as _getPaletteColor } from '../../renderer';
import { generateThemeColors } from '../../themes';
import { isDarkColor } from '../../utils';

const DEFAULT_COLOR = '#1890FF';

export function getColorPrimary(options: ParsedInfographicOptions) {
  return options?.themeConfig?.colorPrimary || DEFAULT_COLOR;
}

export function getPaletteColors(options: ParsedInfographicOptions): string[] {
  const { themeConfig = {}, data } = options;
  const { colorPrimary, palette } = themeConfig;

  if (!palette || palette.length === 0) {
    return Array(data?.items?.length || 1).fill(colorPrimary || DEFAULT_COLOR);
  }

  return data.items.map(
    (_, i) =>
      _getPaletteColor(palette, [i], data.items.length) || DEFAULT_COLOR,
  );
}

export function getPaletteColor(
  options: ParsedInfographicOptions,
  indexes: number[],
): string | undefined {
  return _getPaletteColor(
    options?.themeConfig?.palette,
    indexes,
    options.data?.items?.length,
  );
}

export function getThemeColors(options: {
  colorPrimary?: string;
  colorBg?: string;
}) {
  const { colorBg = 'white', colorPrimary = 'black' } = options;
  return generateThemeColors({
    colorPrimary: colorPrimary,
    isDarkMode: isDarkColor(colorBg),
    colorBg: colorBg,
  });
}
