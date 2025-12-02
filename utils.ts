export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export const scrollToId = (id: string) => {
  if (typeof document === "undefined") return;
  const el = document.getElementById(id);
  if (el && "scrollIntoView" in el) {
    (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export const waitForElement = async (id: string, tries = 40, delay = 50): Promise<void> => {
  if (typeof document === "undefined") return;
  let remaining = tries;
  return new Promise((resolve) => {
    const iv = window.setInterval(() => {
      const el = document.getElementById(id);
      if (el || remaining-- <= 0) {
        window.clearInterval(iv);
        resolve();
      }
    }, delay);
  });
};

export const flashCard = (id: string) => {
  if (typeof document === "undefined") return;
  const host = document.getElementById(id);
  const card = host?.firstElementChild as HTMLElement | null;
  if (!card) return;
  card.classList.add("bg-yellow-50", "ring-2", "ring-yellow-300", "transition-colors");
  window.setTimeout(() => {
    card.classList.remove("bg-yellow-50", "ring-2", "ring-yellow-300");
  }, 2000); // 2000ms match FLASH_MS
};