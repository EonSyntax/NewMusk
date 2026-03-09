"use client";

import { useEffect } from "react";

export default function StatusButtonUpdater() {
  useEffect(() => {
    const initStatusButtons = () => {
      const draftMobile = document.getElementById(
        "status-draft-mobile",
      ) as HTMLInputElement;
      const publishedMobile = document.getElementById(
        "status-published-mobile",
      ) as HTMLInputElement;
      const draftDesktop = document.getElementById(
        "status-draft-desktop",
      ) as HTMLInputElement;
      const publishedDesktop = document.getElementById(
        "status-published-desktop",
      ) as HTMLInputElement;
      const publishButton = document.getElementById("publish-button");
      const publishButtonDesktop = document.getElementById(
        "publish-button-desktop",
      );

      const updateButtonText = () => {
        const isDraft =
          (draftMobile?.checked || draftDesktop?.checked) ?? false;
        const text = isDraft ? "Save Draft" : "Publish";
        const badgeText = isDraft ? "DRAFT" : "PUBLISH";
        const badgeClass = isDraft
          ? "px-2 py-1 rounded bg-amber-100 text-amber-700 text-[10px] font-bold"
          : "px-2 py-1 rounded bg-green-100 text-green-700 text-[10px] font-bold";

        if (publishButton) publishButton.textContent = text;
        if (publishButtonDesktop) publishButtonDesktop.textContent = text;

        const badgeMobile = document.getElementById("status-badge-mobile");
        const badgeDesktop = document.getElementById("status-badge-desktop");

        if (badgeMobile) {
          badgeMobile.textContent = badgeText;
          (badgeMobile as HTMLElement).className = badgeClass;
        }
        if (badgeDesktop) {
          badgeDesktop.textContent = badgeText;
          (badgeDesktop as HTMLElement).className = badgeClass;
        }
      };

      // Attach listeners to radios that exist
      [draftMobile, publishedMobile, draftDesktop, publishedDesktop].forEach(
        (radio) => {
          if (radio && !radio.dataset.listenerAttached) {
            radio.addEventListener("change", updateButtonText);
            radio.dataset.listenerAttached = "true";
          }
        },
      );

      // Set initial text
      updateButtonText();
    };

    // Check immediately for desktop elements
    initStatusButtons();

    // Single check after a short delay for mobile elements
    const timeout = setTimeout(() => {
      initStatusButtons();
    }, 50);

    // Watch for mobile panel opening (when mobile elements are added to DOM)
    let mobileElementsFound = false;
    const observer = new MutationObserver(() => {
      if (!mobileElementsFound) {
        const mobileDraft = document.getElementById("status-draft-mobile");
        const mobilePublished = document.getElementById(
          "status-published-mobile",
        );
        if (mobileDraft && mobilePublished) {
          initStatusButtons();
          mobileElementsFound = true;
          observer.disconnect();
        }
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);

  return null; // This component doesn't render anything
}
