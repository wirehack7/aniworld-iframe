const observer = new MutationObserver(() => {
    const iframeContainer = document.querySelector(".inSiteWebStream div iframe");
  
    if (iframeContainer) {
      const iframeSrc = iframeContainer.src;
      console.log(iframeSrc)
      const urlDisplay = document.createElement("div");
      urlDisplay.classList.add("iframe-url-display");
      const link = document.createElement("a");
      link.href = iframeSrc;
      link.textContent = "Iframe URL: " + iframeSrc;
      link.target = "_blank";
      link.style.color = "white";
  
      urlDisplay.appendChild(link);
  
       iframeContainer.parentElement.insertBefore(urlDisplay, iframeContainer);
  
      observer.disconnect();
    }
  });
  
  observer.observe(document.body, { childList: true, subtree: true });