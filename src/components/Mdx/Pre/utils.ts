export function getLanguage(children: any) {
  const matches = (children.props.className || '').match(/language-(?<lang>.*)/);
  const matchedLanguage =
    matches && matches.groups && matches.groups.lang ? matches.groups.lang : 'tsx';

  if (['js', 'jsx', 'javascript', 'ts', 'tsx'].includes(matchedLanguage)) {
    return 'tsx';
  }

  if (['css', 'scss'].includes(matchedLanguage)) {
    return 'scss';
  }

  if (['html', 'bash', 'json', 'python', 'sql', 'text'].includes(matchedLanguage)) {
    return matchedLanguage;
  }

  throw new Error(`Unknown language: ${matchedLanguage}`);
}

export function getCode(children: any) {
  return children.props.children;
}
