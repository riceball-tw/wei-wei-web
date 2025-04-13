import enTranslation from './en.json';
import zhCnTranslation from './zh-cn.json';
import zhTwTranslation from './zh-tw.json';

export const languages = {
  en: 'English',
  'zh-cn': '简体中文',
  'zh-tw': '繁體中文',
} as const;

// https://en.wikipedia.org/wiki/IETF_language_tag
// IETF language tag
export const languageTags = {
  en: 'en',
  'zh-cn': 'zh-Hans',
  'zh-tw': 'zh-Hant-TW',
} as const;

export const defaultLocale = 'zh-tw';
export const prefixDefaultLocale = true;

export type LanguageKey = keyof typeof languages;
export type LanguageValue = (typeof languages)[LanguageKey];

/**
 * Get the translation file based on the target language
 * If the target language is not found, it will fallback to English
 */
export const getTranslationFile = (targetLocale: LanguageKey) => {
  if (targetLocale === 'en') return enTranslation;
  if (targetLocale === 'zh-cn') return zhCnTranslation;
  if (targetLocale === 'zh-tw') return zhTwTranslation;
  return enTranslation;
};

/**
 * Generate translation function based on the target language
 * If the translation is not found in the target language, it will fallback to English
 * @example const t = useTranslations('zh-tw')
 * @example t('Hello {name}', { name: 'World' }) => 'Hello World'
 */
export function useTranslations(targetLanguage?: LanguageKey) {
  return function t(key: keyof typeof enTranslation, params?: Record<string, string>) {
    const translation = getTranslationFile(targetLanguage ?? defaultLocale)?.[key];

    /**
     * Replace the {} placeholders with the actual values
     */
    if (params) {
      return Object.entries(params).reduce(
        (acc, [paramKey, paramValue]) => acc.replace(new RegExp(`{${paramKey}}`, 'g'), paramValue),
        translation,
      );
    }

    return translation;
  };
}

function removeLanguagePrefix(path: string, languagePrefixes: string[]): string {
  const prefixRegex = new RegExp(`^/(${languagePrefixes.join('|')})`);
  return path.replace(prefixRegex, '').replace(/^\/+/, '');
}

function constructNewPath(targetLocale: LanguageKey, path: string, isDefaultLocalePrefixed: boolean): string {
  const cleanPath = path.replace(/^\/+/, '').replace(/\/+$/, '');
  if (!isDefaultLocalePrefixed && targetLocale === defaultLocale) {
    return cleanPath ? `/${cleanPath}` : '/';
  }
  return cleanPath ? `/${targetLocale}/${cleanPath}` : `/${targetLocale}`;
}

/**
 * Switch locale based on the current path
 * @param targetLocale The target language to switch to
 * @param path The current path
 * @param isDefaultLocalePrefixed Whether the default locale should be prefixed in the URL
 * @returns The new path with the target locale
 * @example changeLanguage('en', '/zh-tw/about') => '/en/about'
 * @example changeLanguage('zh-tw', '/about') => '/about'
 * @example changeLanguage('zh-tw', '/about', true) => '/zh-tw/about'
 */
export function changeLanguage(
  targetLocale: LanguageKey,
  path: string,
  isDefaultLocalePrefixed = prefixDefaultLocale,
): string {
  const languagePrefixes = Object.keys(languages);
  const cleanedPath = removeLanguagePrefix(path, languagePrefixes);
  return constructNewPath(targetLocale, cleanedPath, isDefaultLocalePrefixed);
}
