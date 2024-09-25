export function scrollToLastMessage(scrollTo: 'start' | 'end') {
  const body = document.getElementById('body');
  if (body) {
    if (scrollTo === 'end') {
      body.scrollTop = body.scrollHeight;
    } else if (scrollTo === 'start') {
      body.scrollTop = 0;
    }
  }
}
