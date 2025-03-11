export const smoothScroll = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    // If element not found on current page, navigate to home page with hash
    if (window.location.pathname !== "/") {
      window.location.href = `/#${elementId}`;
    }
  }
};
