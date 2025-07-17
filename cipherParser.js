export function parseNhacMetadata(content) {
  const getMeta = (key) => {
    const match = content.match(new RegExp(`${key}:\\s*"(.*?)"`));
    return match ? match[1] : 'N/A';
  };

  return {
    composer: getMeta('composer'),
    emotion: getMeta('emotion'),
    style: getMeta('style'),
    cipherTheme: getMeta('cipherTheme'),
    langMode: getMeta('langMode'),
    remixLevel: getMeta('remixLevel'),
  };
}