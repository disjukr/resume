function domready(then) {
    const { readyState } = document;
    if ((readyState === 'interactive') || (readyState === 'complete')) then();
    else window.addEventListener('DOMContentLoaded', then);
}

domready(() => {
    const detailsMap = new WeakMap;
    window.matchMedia('print').addListener(mediaQueryList => {
        const detailsList = document.querySelectorAll('details');
        if (mediaQueryList.matches) {
            for (let details of detailsList) {
                const open = details.getAttribute('open') != null;
                detailsMap.set(details, open);
                if (!open) details.setAttribute('open', '');
            }
        } else {
            for (let details of detailsList) {
                const open = detailsMap.get(details);
                if (!open) details.removeAttribute('open');
            }
        }
    });
});
